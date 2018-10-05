class ClientRoute extends HTMLElement{
	constructor(){
		super();
		this.loaded = false;

		window.addEventListener("pathchanged", event => {
			if(window.location.pathname === this.path){
				this.innerHTML = this.content;
				if(this.from && !this.loaded) this.load();
			}
			else this.innerHTML = "";
		})
	}

	connectedCallback(){
		this.content = this.innerHTML;
		if(this.from && !this.tag || this.tag && !this.from) 
			throw new Error("if you set from/tag you need tag/from set too");
		if(window.location.pathname !== this.path) this.innerHTML = "";
		else if(this.from && !this.loaded) this.load();
	}

	get from(){ return this.getAttribute("from") }
	get path(){ return this.getAttribute("path") }
	get tag(){ return this.getAttribute("tag") }

	load(){
		this.importElement(this.from)
			.then(_ => { 
				this.innerHTML = this.content = `<${this.tag}></${this.tag}>`;
				this.loaded = true;
			});
	}

	importElement(path){
		return fetch(path)
			.then(res => res.text())
			.then(code => eval(code));
	}
}

customElements.define("client-route", ClientRoute);
