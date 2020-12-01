module.exports = {
  name: 'projects',
  description: 'projects command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Projects',
        description:
          'The Mountain Fields Team has completed `0` projects and are currently working with `0` projects.',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783097411186851870/setting.png',
        },
      },
    });
  },
};
