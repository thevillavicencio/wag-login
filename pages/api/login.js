import Cookies from 'cookies'
import LOGIN from '../../api/login'

export default async function handler(req, res) {
  console.log(req, res)

  if (req.method == "POST"){  
    const formData = new FormData();
    const username = req.body['email']
    const guess = req.body['password']
    let response = null
    let status = null
    
    // if(!guess || !username) {
    //   res.redirect("/?msg=Missing username or password");
    // }

    formData.append('username', username);
    formData.append('password', guess);

    fetch(LOGIN.login_url, {
      method: 'post',
      body: formData,
    })
    .then((response) => {
      status = response.status;
      return response.json()
    })  
	  .then((data) => {
      response = data
    });

    if (status > 400 && status < 599){
        res.redirect("/?msg=Incorrect username or password");
    } else {
      const cookies = new Cookies(req, res)
      cookies.set('session', response)
      res.redirect("/?status=ok")
    }
  } else {
    res.redirect("/")
  }
}