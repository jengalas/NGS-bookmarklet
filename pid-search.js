(function(){
	void(str=prompt('PID:',''));
	if(str) {
		location.href='http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox='+escape(str);
	}
})();