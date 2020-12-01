module.exports = {
  name: 'team',
  description: 'team command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Team',
        description:
          'The Mountain Fields Team includes:\n\n**Carl Larsson**\nQA analyst, Full Stack Designer\n\n**Erik Kjellberg**\nContent Writer, Logo Designer, QA analyst\n\n**Pontus Henriksson**\nContractor, Full Stack Developer, QA analyst\n\n**Walter Sporrong**\nQA Analyst',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783098789564907580/group.png',
        },
      },
    });
  },
};
