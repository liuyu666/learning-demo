let content = '面向对象(Object Oriented)是软件开发方法，一种编程范式。面向对象的概念和应用已超越了程序设计和软件开发，扩展到如数据库系统、交互式界面、应用结构、应用平台、分布式系统、网络管理结构、CAD技术、人工智能等领域。面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术发展到一定阶段后的产物。'
let enContent = 'Object Oriented is a software development method, a programming paradigm. Object-oriented concepts and applications have surpassed programming and software development, and expanded to fields such as database systems, interactive interfaces, application structures, application platforms, distributed systems, network management structures, CAD technology, and artificial intelligence. Object-oriented is a method of understanding and abstracting the real world, and it is the product of the development of computer programming technology to a certain stage.'


class Course{
  constructor(teacher, time, title) {
    this.teacher = teacher;
    this.time = time;
    this.title = title;
    this._content = null
  }
  presentCourse(){
  }
  get content() {
    console.log('获取课程');
    return this._content
  }

  set content(value) {
    console.log('set课程');
    this._content = value
  }
}

class TextCourse extends Course{
  constructor(teacher, time, title, content) {
    super(teacher, time, title)
    this._content = content
  }
  presentCourse() {
    document.querySelector('#content').innerHTML = this.content
  }

  translateContent(lan) {
    if(lan == 'en') {
      this.content = enContent;
      this.presentCourse()
    } else if('zh'){
      this.content = content;
      this.presentCourse()
    }
  }
}

class videoCourse extends Course{
  constructor(teacher, time, title, content) {
    super(teacher, time, title)
    this._content = content
  }
  presentCourse() {
    document.body.appendChild(this.content)
  }
}

//<video width="320" height="240" controls>
//  <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
//</video>


let textCourse = new TextCourse('xiaoming', '2021-1-21', '面向对象', content)
let course = new Course('daming', '2021-1-21', '文本课程')
console.log(textCourse, course, 'textCourse');
textCourse.presentCourse()

// setTimeout(() => {
//   textCourse.presentCourse()
// }, 1000);

function toZh() {
  textCourse.translateContent('zh')
}

function toEn() {
  textCourse.translateContent('en')
}
