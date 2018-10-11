export class FooterView {
  constructor(element){
    this.element = element;
  }

  _updateModel() {
    return `
          <div class="card">
            <h2>References</h2>
            <div class="middle-content">
              <a href="https://ocw.mit.edu/courses/mathematics/18-785-number-theory-i-fall-2016/">
                <img src="css//img//mitocw_1024x768.jpg"
                  alt="mitocw"/>
                </a>
            </div>
            <p>MIT OpenCourseWare By Prof.Andrew Sutherland</p>
            <a href="https://ocw.mit.edu/courses/mathematics/18-785-number-theory-i-fall-2016/">
              <button class="button" id="mit">
                <span>Visit</span>
              </button> 
            </a>
          </div>`
    }

  updateDom(){
    this.element.innerHTML = this._updateModel();
  }  

}