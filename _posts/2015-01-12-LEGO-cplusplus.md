---
layout: post
title: "Programming LEGO Mindstorms using C|C++"
description: "A Special Project involving LEGO Mindstorms and C C++"
categories: project
tags: [SUU, hack, LEGO, reverse engineering]
redirect_from:
  - /2015/01/2/
---
Taking on the task to program the LEGO Mindstorms robot using only C or C++ is not quite as simple as one may think. The LEGO Ev3 does support the ability and documentation on how to do so is not trivial. Programming the robot was a challenge given to my colleague and I as part of a special project for Dr. Michael Grady at Southern Utah University. While both Travis Floyd and I were in our undergraduate, Dr. Grady challenged us with projects that hadn't been completed to his liking.
Our approach to this project involved breaking (bricking) the 'brick' (the brains) in an attempt to gather more information about the instruction set architecture design and any and all information relating to the programming. It seems that when there is a desire to gain more information about a device with a USB port, kali Linux or any distro of Linux is my go to. In order to gather useful information we need to first build and install GNU ARM (distro of GNU Compiler Collection).
Verify support and compatability (we had to use an old distro of Ubuntu instead of kali) and then install the required packages:
~~~ ruby
~$ sudo apt-get install tk-dev ncurses-dev libmpfr-dev texinfo
~~~
Now we will need to build the toolchain. To accomplish this we can write a script to do the work. Open a terminal and create a file with the name toolchain.sh and open with either nano or vi or vim or an equivilant editor.
~~~ ruby
~$ mkdir lego_build
~$ cd lego_build
~$ touch toolchain.sh
~$ nano toolchain.sh
~~~
In the text editor:
~~~ ruby
#!/bin/bash
#
#
## Depending on compiler you may have to change the next line (eg gcc-4.4 to gcc-4.2)
GCC_BINARY_VERSION=/usr/bin/gcc-4.4
if [ ! -e $GCC_BINARY_VERSION ]; then
        echo "Error:  $GCC_BINARY_VERSION not found, check GCC_BINARY_VERSION in script ";
	exit 1;
fi
export CC=$GCC_BINARY_VERSION

## Define, set, build
ROOT=`pwd`
SRCDIR=$ROOT/src
BUILDDIR=$ROOT/build
PREFIX=$ROOT/gnuarm

## Verify the url in the next line prior to executing this script.
## Keep in mind the age of this project and do not assume anything, verify every line.
## Uncomment the following lines once verification completed
#GCC_URL=http://ftp.gnu.org/pub/gnu/gcc/gcc-4.4.2/gcc-4.4.2.tar.bz2
GCC_VERSION=4.4.2
GCC_DIR=gcc-$GCC_VERSION
#BINUTILS_URL=http://ftp.gnu.org/gnu/binutils/binutils-2.20.tar.bz2
BINUTILS_VERSION=2.20
BINUTILS_DIR=binutils-$BINUTILS_VERSION
#NEWLIB_URL=ftp://sources.redhat.com/pub/newlib/newlib-1.18.0.tar.gz
NEWLIB_VERSION=1.18.0
NEWLIB_DIR=newlib-$NEWLIB_VERSION

## ALL scripts should give a status of display progress. This is a good habit to develop
## "Now is the time for all good programmers" - Dr. Michael Grady
echo "Building ARM-ELF cross-compiler:
  Prefix: $PREFIX
  Sources: $SRCDIR
  Build files: $BUILDDIR
  Software: Binutils $BINUTILS_VERSION
            Gcc $GCC_VERSION
            Newlib $NEWLIB_VERSION
            Gdb $GDB_VERSION (disable)
  Host compiler : $GCC_BINARY_VERSION
Press ^C to STOP process or any key to continue"
read IGNORE

## Create the needed directories and pull all then unpack
mkdir -p $SRCDIR $BUILDDIR $PREFIX
(
cd $SRCDIR

## Pull all the source files
ensure_source $GCC_URL
ensure_source $BINUTILS_URL
ensure_source $NEWLIB_URL

## Unpack
unpack_source $(basename $GCC_URL)
unpack_source $(basename $BINUTILS_URL)
unpack_source $(basename $NEWLIB_URL)
)

## Set PATH variable to include all necessary binaries
OLD_PATH=$PATH
export PATH=$PREFIX/bin:$PATH

## Build binutils, patch, then Build
(
mkdir -p $BUILDDIR/$BINUTILS_DIR
cd $BUILDDIR/$BINUTILS_DIR

$SRCDIR/$BINUTILS_DIR/configure --target=arm-elf --prefix=$PREFIX \
    --disable-werror --enable-interwork --enable-multilib \
    && make all install
) || exit 1

(
MULTILIB_CONFIG=$SRCDIR/$GCC_DIR/gcc/config/arm/t-arm-elf
echo "
MULTILIB_OPTIONS    += mhard-float/msoft-float
MULTILIB_DIRNAMES   += fpu soft
MULTILIB_EXCEPTIONS += *mthumb/*mhard-float*
MULTILIB_OPTIONS += mno-thumb-interwork/mthumb-interwork
MULTILIB_DIRNAMES += normal interwork
" >> $MULTILIB_CONFIG

mkdir -p $BUILDDIR/$GCC_DIR
cd $BUILDDIR/$GCC_DIR

$SRCDIR/$GCC_DIR/configure --target=arm-elf --prefix=$PREFIX \
    --enable-interwork --enable-multilib \
    --disable-__cxa_atexit \
    --enable-languages="c,c++" --with-newlib \
    --with-headers=$SRCDIR/$NEWLIB_DIR/newlib/libc/include \
    && make all-gcc install-gcc
) || exit 1

# Building
(
mkdir -p $BUILDDIR/$NEWLIB_DIR
cd $BUILDDIR/$NEWLIB_DIR
$SRCDIR/$NEWLIB_DIR/configure --target=arm-elf --prefix=$PREFIX \
    --enable-interwork --enable-multilib \
    && make all install
) || exit 1

(
cd $BUILDDIR/$GCC_DIR
make all install
) || exit 1
echo " Build completed! "
~~~
For more information check NxOS and developer loic.cuvillon.
We can now run toolchain.sh: ~~~ ruby
                            ~$ chmod u+x toolchain.sh
                            ~$ sudo ./toolchain.sh
                            ~~~
Now it is time to setup the nxtOSEK:
~~~ ruby
~$ sudo apt-get install wine
~~~
Extract and locate ecrobot directory and edit.
~~~ ruby
## Specify GNU-ARM root directory
ifndef GNUARM_ROOT
GNUARM_ROOT = /[absolute path to parent directory of gnuarm]/gnuarm
endif

## Test
~$ cd ./nxtOSEK/samples_c/helloworld
~$ make all
~~~
