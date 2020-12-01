module.exports = {
  name: 'walter',
  description: 'walter command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Walter Sporrong',
        description:
          '**Age:** 14\n**Sex:** Male\n**Profession:** QA analyst\n**Years of experience:** 0\n\n**About:** "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor urna id lectus maximus convallis. Duis erat nunc, molestie vel elit tempus, vestibulum maximus risus."',
        color: 16734039,
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://cdn.discordapp.com/avatars/558917745916248076/6c3dfb06022cfdb6af36be405561d85a.png',
        },
      },
    });
  },
};
