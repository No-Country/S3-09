const Card = require('../models/card');

const getCards = async (req, res) => {

    const cards = await Card.findAll();

    const total = await Card.count()

    res.json({
        total,
        cards
    });
}

const getCardById = async (req, res) => {

    const { id } = req.params;
    const card = await Card.findOne({
        where: {
            id,
        },
    });

    res.json(card);

}

const createCard = async (req, res) => {

    const { full_name, card_number, expires, CVV } = req.body;

    const card = new Card({
        full_name,
        card_number,
        expires,
        CVV
    });

    await card.save();

    res.json({
        msg: 'Card created',
        card
    });
}

const updateCard = async (req, res) => {

    const { id } = req.params;
    const { full_name, card_number, expires, CVV } = req.body;

    try {
        const card = await Card.findByPk(id);

        await card.update({

            full_name,
            card_number,
            expires,
            CVV
        });

        res.status(201).json({
            msg: 'Card updated',
            card
        });

    } catch (error) {
        res.status(500).json(
            console.log(error),
            {
                msg: 'Error updating card'
            }
        );
    }
}

const deleteCard = async (req, res) => {
    const { id } = req.params;
    const card = await Card.findByPk(id);

    card.destroy();

    res.json({
        msg: 'Card deleted',
        card
    });
}

module.exports = {
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
}