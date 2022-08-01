import express from 'express';
const router = express.Router()

import Billing from '../models/billing.model.js'

//Find All Data in Billing
router.route('/').get((req,res)=>{
    Billing.find()
    .then(billing=>res.json(billing))
    .catch(err=> res.status(400).json('Error:'+err))
})

//Add new Billing Data 
router.route('/new').post((req,res)=>{
    const name = req.body
    const newData = new Billing(name)
    console.log(name)
    newData.save()
    .then(()=>res.json('Data Saved Successfully !!!'))
    .catch(err=>res.status(400).json('Error:'+err))
})

//edit Billing Data
// router.route('/update/:id').post((req,res)=>{
//     Billing.findById(req.params.id)
//     .then(billing=>{
//     })
// })

export default router