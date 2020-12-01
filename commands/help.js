module.exports = {
  name: 'help',
  description: 'help command',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Mountain Fields | Help',
        color: 16734039,
        fields: [
          {
            name: '`mf.carl`',
            value: 'Displays info about the team member Carl.',
          },
          {
            name: '`mf.clear <amount>`',
            value: 'Clears <amount> of messages in the chat.',
          },
          {
            name: '`mf.erik`',
            value: 'Displays info about the team member Erik.',
          },
          {
            name: '`mf.help`',
            value: 'Displays this message.',
          },
          {
            name: '`mf.info`',
            value: 'Displays info about Mountain Fields.',
          },
          {
            name: '`mf.pontus`',
            value: 'Displays info about the team member Pontus.',
          },
          {
            name: '`mf.price`',
            value: 'Displays the price that we charge for our projects.',
          },
          {
            name: '`mf.projects`',
            value: 'Displays info about our current and completed projects.',
          },
          {
            name: '`mf.team`',
            value: 'Displays all the members inside the Mountain Fields Team.',
          },
          {
            name: '`mf.walter`',
            value: 'Displays info about the team member Walter.',
          },
          {
            name: '`mf.website`',
            value: 'Displays info about the Mountain Fields website.',
          },
        ],
        footer: {
          text: 'Made by: Pontus Henriksson 💗',
        },
        thumbnail: {
          url:
            'https://media.discordapp.net/attachments/779126197468004432/783084647109361704/question.png',
        },
      },
    });
  },
};
