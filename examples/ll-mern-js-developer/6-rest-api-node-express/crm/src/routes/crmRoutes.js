//import { runInNewContext } from "vm";
import { 
    addNewContact, 
    getContacts, 
    getContactsWithId, 
    updateContact,
    deleteContact,
 } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
            
        }, /*(req, res, next) => {
            res.send('GET request successful');
        }*/getContacts)
        /*.post((req, res) => {
            res.send('POST request successful');
        });*/
        .post(addNewContact);

    app.route('/contact/:contactId')
        /*.put((req, res) => {
            res.send('PUT request successful');
        })*/
        
        .put(updateContact)
        /*.delete((req, res) => {
            res.send('DELETE request successful');
        })*/
        .delete(deleteContact)
        .get(getContactsWithId);

}

export default routes;