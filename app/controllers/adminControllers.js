

class adminControllers  {
  

    getDashboard(req, res) {
      
        res.render('dashboard.ejs' ,
        {
            pageTitle: 'dashboard',
            path: '/dashboard',
            layout: './layouts/dashLayout',
            user: req.user
        }
        )
    }



}



module.exports = new adminControllers()