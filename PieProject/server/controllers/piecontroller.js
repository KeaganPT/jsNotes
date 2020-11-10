const express = require('express');
const router = express.Router();
const {Pie} = require('../models')

router.get('/pielove', (req, res) => res.send('I love pies!'));

router.get('/anotherpierequest', (req, res) => res.send('Here is more pie'))

router.get("/getallpies", (req, res) => {
    Pie.findAll()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.post("/createpie", async (req, res) => {
    try {
        // const pieRequest = {
        //     //model : postman/view
        //     flavor: req.body.flavor,
        //     size: req.body.size,
        //     hotPie: req.body.hotPie,
        //     vegan: req.body.vegan,
        //     baseOfPie: req.body.baseOfPie,
        //     crust: req.body.crust
        // }

        const {flavor, size, hotPie, vegan, baseOfPie, crust} = req.body;

        let newPie = await Pie.create({
            flavor, size, hotPie, vegan, baseOfPie, crust
        });

        res.status(200).json({
            pie: newPie,
            message: "Pie Created!"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Pie Creation Burned in Oven."
        })
    }
})

// Broken code:
router.get('/:flavor', (req, res) => {
// models finds one       flavor in db compared to flavor in route
  Pie.findOne({ where: { flavor: req.params.flavor }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
})
// router.put('/:id', (req, res) => {
//     Pie.update(req.body, { where: { id: req.params.id }})
//       .then(pie => res.status(200).json(pie))
//       .catch(err => res.json(req.errors))
// })
  
router.put("/:id", (req, res) => {
    const query = req.params.id;
    Pie.update(req.body, { where: { id: query } })
      .then((piesUpdated) => {
        Pie.findOne({ where: { id: query } }).then((locatedUpdatedPie) => {
          res.status(200).json({
            pie: locatedUpdatedPie,
            message: "Pie updated successful",
            piesChanged: piesUpdated,
          });
        });
      })
      .catch((err) => res.json({
        err}))
});

router.delete('/:id', (req,res) => {
    Pie.destroy({
        where: {id: req.params.id}
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({error: err}))
})

module.exports = router;