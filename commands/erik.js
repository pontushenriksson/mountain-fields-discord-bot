module.exports = {
  name: 'erik',
  description: 'erik command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Erik Kjellberg',
        description:
          '**Age:** 14\n**Sex:** Male\n**Profession:** Content Writer, Logo Designer, QA analyst.\n**Years of experience:** 1\n\n**About:** "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor urna id lectus maximus convallis. Duis erat nunc, molestie vel elit tempus, vestibulum maximus risus."',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://cdn.discordapp.com/avatars/425302171806859269/021328ff59398cc9d2e84920dc045ef4.png',
        },
      },
    });
  },
};
