module.exports = {
  name: 'pontus',
  description: 'pontus command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Pontus Henriksson',
        description:
          '**Age:** 14\n**Sex:** Male\n**Profession:** Contractor, Full Stack Developer, QA analyst\n**Years of experience:** 5\n\n**About:** "I am a User Interface and User Experience designer and a full stack developer. I specialize in web and software design, front end and back end, and construction of applications and games."',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://cdn.discordapp.com/avatars/554378721176322090/98b15270d6c7d52bdddea1213214ef2c.png',
        },
      },
    });
  },
};
