exports.ListAll = (req, res) => {
    let usuarios = [
    {
        nome : "Hugo01",
        Email : "barrosbg@hotmail.com01"
    },
    {
        nome : "Hugo02",
        Email : "barrosbg@hotmail.com02"
    }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuario criado con sucesso',
        data: req.body
    }
    res.send(response)
}