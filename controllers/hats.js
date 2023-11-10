var Hat = require('../models/hats');
// List of all Hats
exports.hats_list = async function(req, res) {
    try{
        theHats = await Hat.find();
        res.send(theHats);
    } catch(err){
        ress.status(500);
        res.send(`{"error": ${err}}`);
    }
};
//res.send('NOT IMPLEMENTED: Hats list');
//};
// for a specific Hat.
exports.hats_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Hat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Hat create on POST.

exports.hats_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Hat();
    document.hat_name = req.body.hat_name;
    document.hat_color = req.body.hat_color;
    document.hat_cost = req.body.hat_cost;
    try{
        let result = await document.save();
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(`{"error" : ${err}}`);
    }
};
//res.send('NOT IMPLEMENTED: Hats create POST');
//};
// Handle Hat delete form on DELETE.
exports.hats_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Hats delete DELETE ' + req.params.id);
};
// Handle Hat update form on PUT.
exports.hats_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Hat.findById( req.params.id)
    // Do updates of properties
    if(req.body.hat_name)
    toUpdate.hat_name = req.body.hat_name;
    if(req.body.color) toUpdate.color = req.body.color;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// VIEWS
// Handle a show all view
exports.hats_view_all_Page = async function(req, res) {
    try
    {
        theHats = await Hat.find();
        res.render('hats', { title: 'Hats Search Results', results: theHats });
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};
