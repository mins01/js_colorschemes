/**
 * 컬러 스키마 제어용.
 * 색상표를 지정하고 그 기준으로 지정 갯수만큼 배열로 색상을 가져온다.
 * chartjs 등에서 사용하려고 만든다.
 */
class Colorschemes{
	static debug = false;
	static schemeSets = {}
	static scheme(name,length){
		// if(this.debug){console.warn('scheme',...arguments);}
		if(!this.schemeSets[name]){
			if(this.debug){console.warn('Not supported scheme',name);}
			return null;
		}

		let target = this.schemeSets[name];
		let r = [];
		if(!length){
			r = target;
		}else{ // 리턴 될 스키마 늘리기
			let m =  Math.ceil(length / target.length);
			for(let i=0;i<m;i++){
				r = r.concat(target);
			}
			r.length = length;
		}
		return r;
	}
}


// export default Colorschemes;
module.exports = Colorschemes;