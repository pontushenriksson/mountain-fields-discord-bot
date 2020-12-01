module.exports = {
  name: 'info',
  description: 'info command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Info',
        description:
          '**About:** Mountain Fields is a company that provides websites, apps and software for their clients. They are a web-based company that provides the best value possible to their clients.\n\n**Founders:** Carl Larrson, Erik Kjellberg, Pontus Henriksson, Walter Sporrong.\n\n**Founded in:** October 11 2020.\n\n**Number of employees:** 4.\n\n**Website:** http://www.mountainfields.tk/\n\n**Projects:** The Mountain Fields Team has completed `0` projects and are currently working with `0` projects.',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783089996784861184/info-button.png',
        },
      },
    });
  },
};
