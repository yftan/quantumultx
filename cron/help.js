function help() {
  let url = {
    url: `https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/36w40xBAHmNTico_YRjLrQ/`,
  }
  $task.fetch(url).then((response) => {
    let data = response.body
    if (data.code == "200") {
      let title = `互助码`
      let subTitle = `互助码注册成功`
      let detail = `互助码注册成功`
      console.log(`${title}, ${subTitle}, ${detail}`)
      $notify(title, subTitle, detail)
      $done()
    } else {
        let title = `互助码`
        let subTitle = `互助码注册失败`
        let detail = `互助码注册失败`
        console.log(`${title}, ${subTitle}, ${detail}`)
        $notify(title, subTitle, detail)
        $done()
    }
  })
}


help({})
