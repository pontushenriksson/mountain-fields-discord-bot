module.exports = {
  name: 'price',
  description: 'price command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Price',
        description:
          'They will charge 10€ for a small project, for a middle-sized project they will charge 20€ and for a large project they will charge 30€.',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783094949821546546/dollar.png',
        },
      },
    });
  },
};
