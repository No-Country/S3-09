const Card = require('../models/card');

const getCards = async (req, res) => {

    const [total, cards] = await Promise.all([
        Card.count(),
        Card.findAll()
    ]);
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
    const userId = req.userId

    const { full_name, card_number, expires, CVV } = req.body;

    const card = new Card({
        full_name,
        card_number,
        expires,
        CVV,
        user_id: userId
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