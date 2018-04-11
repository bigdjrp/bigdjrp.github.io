$(document).ready(function() {
    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    function loadbreaches() {
        var html;
        var count = 1;
        var breach_name;
        var breach_title;
        $('#col-header').html('All Breaches');
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                html = '<div class="row">';
                for(i=0;i<data.length;i++) {
                    count++;
                    breach_title = data[i].Title;
                    breach_name = data[i].Name;
                    if(breach_title == '17') {
                        breach_title = '17 Media';
                    }
                    html += '<div class="col-md-4">';
                    html += '<div class="panel panel-default">';
                    html += '<div class="panel-heading text-center">'+breach_title+'</div>';
                    html += '<div class="panel-body">';
                    html += '<img src="https://az594751.vo.msecnd.net/cdn/'+breach_name+'.'+data[i].LogoType+'" class="breach-logo" /><br>';
                    html += '<p><a href="#" class="btn btn-primary btn-block">Learn More &raquo;</a></p>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    if(count == 4) {
                        html += '</div>';
                        html += '<div class="row">';
                    }
                }
                $('#results').append(html);
            }
        });
    }

    function top_five() {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                var html = '';
                for(i=0;i<5;i++) {
                    var breach = data[i].Title;
                    if(breach == '17') {
                        breach = '17 Media';
                        html += '<p>'+breach+'</p>';
                    }
                    else {
                        html += '<p>'+breach+'</p>';
                    }

                }
                $('#topfive').append(html);
            }
        });
    }

    function latest() {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: 'json',
            success: function(data) {
                data.sort(function(a,b) {
                    return new Date(b.AddedDate) - new Date(a.AddedDate);
                });
                var html = '';
                for(i=0;i<1;i++) {
                    var breach = data[i].Title;
                    if(breach == '17') {
                        breach = '17 Media';
                        html += '<p>'+breach+'</p>';
                    }
                    else {
                        html += '<h3>Latest Breach: '+breach+' which had '+formatNumber(data[i].PwnCount)+' exposed accounts and included '+data[i].DataClasses[0]+'.</h3>';
                    }

                }
                $('#latest').append(html);
            }
        });
    }

    function getInfo(email) {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breachedaccount/'+email+'?includeUnverified=true',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var html = '<h4>Your email address was found in the following hacked site breaches:</h4>';
                for(i=0;i<data.length;i++) {
                    var breachName = data[i].Title;
                    var breachDesc = data[i].Description
                    html += '<h3><span class="label label-danger">'+breachName+'</span></h3>';
                    html += '<p>'+breachDesc+'</p>';
                    html += '<br>';
                }
                $('#sites').html(html);
            }
        });
    }
    //loadbreaches();
    //top_five();
    latest();
    $('#search').click(function() {
        getInfo($('#email').val());
    });
});
