module.exports = {
  name: 'carl',
  description: 'carl command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Carl Larsson',
        description:
          '**Age:** 14\n**Sex:** Male\n**Profession:** QA analyst, Full Stack Designer\n**Years of experience:** 1\n\n**About:** "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor urna id lectus maximus convallis. Duis erat nunc, molestie vel elit tempus, vestibulum maximus risus."',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://cdn.discordapp.com/avatars/484336564005240836/79db9638ddde11af4bb4945bb77e06dc.png',
        },
      },
    });
  },
};
