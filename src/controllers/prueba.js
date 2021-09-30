update: async function (req, res) {  
        
    try {

        const resultValidation = validationResult(req);
        console.log(resultValidation)
        //res.send(errores)

        

        if(resultValidation.isEmpty()){

            let usuarioEditar = await db.User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                birthDate: req.body.birthDate,
                adress: req.body.adress,
                phoneNumber: req.body.phoneNumber,
                country: req.body.country,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                isAdmin: 0
            }, {
                where: { id: req.params.id }
            });

            console.log(usuarioEditar);

            let numberArray = req.body.medio_de_pago.map(m => parseInt(m))
            console.log(numberArray);

            let user = await db.User.findByPk(req.params.id);
            let actualizarMdp = await user.setMedioDePago(numberArray);

            res.redirect('/user/list');

        } else{

            

            let mediosDePago = await db.MedioDePago.findAll();

            return res.render("userEditingForm", {
                errors: resultValidation.mapped(),
                old: req.body,
                mediosDePago: mediosDePago
            })
        }

    } catch (e) { res.send("Soy el catch") };

},