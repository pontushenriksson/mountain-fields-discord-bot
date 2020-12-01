module.exports = {
  name: 'website',
  description: 'website command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Website',
        description:
          'The company Mountain Fields have their own website!\n\n**Click here to check it out:** http://www.mountainfields.tk',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783089992280965190/global.png',
        },
      },
    });
  },
};
