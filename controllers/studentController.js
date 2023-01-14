class StudentController {
  static set_cookie = (req, res) => {
    
    res.cookie("username", "arpita", { maxAge: 5000000 });
    res.cookie("password", "12345");
    res.send("cookie set");
  };

  static delete_cookie = (req, res) => {
    res.clearCookie("username");
    res.send("Cookie Deleted...");
  };

  static get_cookie = (req, res) => {
    console.log(req.cookies)
    res.send('i am cookies')
  };
}

export default StudentController;
