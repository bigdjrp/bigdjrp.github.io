---
layout: post
title: "Overclock Raspberry Pi 3"
description: "These are the proven overclock settings for the Raspberry Pi 3"
categories: [demo]
tags: [demo, hack, raspberry pi]
redirect_from:
  - /2017/05/11/
---
A feature that was a big hit with Raspberry Pi versions prior to Pi 3 was the ability to overclock the Pi using the raspi-config GUI. This feature is no longer available using the GUI, however it is simple to circumvent by editing the /boot/config.txt file.

<img src="Raspberry_Pi_3_illustration.svg.png" alt="raspberrypi" style="width: 200px;"/>
![raspberrypi](https://bigdjrp.github.io/assets/images/Raspberry_Pi_3_illustration.svg.png)

## Overclock settings
Open a terminal and navigate to the /boot/config.txt file
~~~ ruby
~$ sudo nano .boot/config
~~~
Now find the section where the default settings are:
~~~ ruby
## Generally the only default setting defined is:
arm_freq=800
## This line may be commented out but we will want to uncomment it and modify it to:
arm_freq=1250   # The safe zone is between 1200 - 1350 represents the frequency of ARM in MHz
core_freq=500   # Drives L2 cache
over_voltage=4  # Core voltage best to stay below 6
gpu_freq=400    # GPU memory
sdram_freq=450/pre> # Frequency of sdram in MHz
over_voltage_sdram=0 # Voltage for sdram
~~~
That's it! Just modifying these settings alone will improve the performance of the single board computer named after my favorite dessert. With this increase there will be an increase in heat. To help with the increase in temp, using heat sinks along with a case that includes a fan is a good idea.
