function help(path) {
  let url = {
    url: path,
    method: 'GET',
  }
  console.log("开始执行请求")
  $task.fetch(url).then((response) => {
    let data = response.body
    console.log(data)
    if (data.code == "200") {
      let title = `互助码`
      let subTitle = `互助码注册成功`
      let detail = `互助码注册成功`
      console.log(`${title}, ${subTitle}, ${detail}`)
      $notify(title, subTitle, detail)
    } else {
        let title = `互助码`
        let subTitle = `互助码注册失败`
        let detail = `互助码注册失败${path}`
        console.log(`${title}, ${subTitle}, ${detail}`)
        $notify(title, subTitle, detail)
    }
    $done()
  })
}

function doGet(){
    let urlArr=[
        'https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/MDAKftK4zvbO_WALfpIG8qt9zd5YaBeE/',
        'https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/36w40xBAHmNTico_YRjLrQ/',
        'http://api.turinglabs.net/api/v1/jd/bean/create/oa6bayv76bysakhor55eeqytq7g5ucjthun63my/',
        'http://api.turinglabs.net/api/v1/jd/bean/create/lkz2riia6yzgxkuit5yh2ctkfa/',
        'https://code.chiang.fun/api/v1/jd/jdzz/create/Sv_11SRwZ8EneIRPyl_AMdA/',
        'https://code.chiang.fun/api/v1/jd/jdzz/create/Sa2DclZ6mId9-fVI/',
        'http://api.turinglabs.net/api/v1/jd/ddfactory/create/T022v_11SRwZ8EneIRPyl_AMdACjVWnYaS5kRrbA/',
        'http://api.turinglabs.net/api/v1/jd/ddfactory/create/T015a2DclZ6mId9-fVICjVWnYaS5kRrbA/',
        'http://api.turinglabs.net/api/v1/jd/jxfactory/create/pR2znAEnu_-iY11PN-z2tg==/',
        'http://api.turinglabs.net/api/v1/jd/jxfactory/create/F5VvFACyQG23Ar5vVUh28A==/',
        'http://api.turinglabs.net/api/v1/jd/farm/create/a7f318c2df934ae19498f20011867ba0/',
        'http://api.turinglabs.net/api/v1/jd/farm/create/7795835cca65452abf24d314a53b3968/',
        'http://api.turinglabs.net/api/v1/jd/pet/create/MTE1NDUwMTI0MDAwMDAwMDQyOTczMTQ1/',
        'http://api.turinglabs.net/api/v1/jd/pet/create/MTE1NDQ5OTIwMDAwMDAwNDMwNTczNDc=/'
    ];
    for(let i=0; i< urlArr.length; i++){
        help(urlArr[i]);
    }
}


doGet({})
