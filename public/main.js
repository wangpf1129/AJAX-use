const getCSS = document.querySelector('#getCSS')
const getJS = document.querySelector('#getJS')
const getDiv = document.querySelector('#getDiv')
const getXml = document.querySelector('#getXml')
const getJSON = document.querySelector('#getJSON')
const getPage = document.querySelector('#getPage')
let pageNumber = 1

getCSS.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  req.open('GET', '/style.css')
  req.onreadystatechange = () => {
    // console.log(req.readyState);
    // 下载完成 4 ,
    if (req.readyState === 4) {
      // 状态码成功 2xx  失败 4xx 、5xx
      if (req.status >= 200 && req.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = req.response
        document.head.appendChild(style)
      } else {
        console.log('请求CSS失败');
      }
    }
  }
  req.send()

})

getJS.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  req.open('GET', '/2.js')

  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = req.response
        document.body.appendChild(script)
      } else {
        console.log('请求JS失败');
      }
    }
  }
  req.send()

})

getDiv.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  req.open('GET', '/1.html')
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = req.response
        document.body.appendChild(div)
      } else {
        console.log('请求 div');
      }
    }
  }
  req.send()

})

getXml.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  req.open('GET', '/3.xml')
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        const dom = req.responseXML
        // console.log(dom);
        const text = dom.getElementsByTagName('warning')[0].textContent.trim()
        console.log(text);
      }
    }
  }
  req.send()
})


getJSON.addEventListener('click', () => {

  const req = new XMLHttpRequest()
  req.open('GET', '/4.json')
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        // console.log(req.response);
        const obj = JSON.parse(req.response)
        // console.log(obj);
        userName.innerText = obj.userName
      }
    }
  }
  req.send()
})

getPage.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  req.open('GET', `/page${pageNumber+1}`)
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        let nextPage = JSON.parse(req.response)
        nextPage.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.id
          page.appendChild(li)
        });
      }
      pageNumber += 1
    }
  }
  req.send()
})