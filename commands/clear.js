module.exports = {
  name: 'clear',
  description: 'clear command',
  async execute(message, args) {
    if (!args[0])
      return message.channel.send({
        embed: {
          title: 'Mountain Fields | Clear',
          description:
            "Please specify the number of messages you want to clear for example ´mf.clear 10´.\n\n*You can't clear messages older than 14 days!*",
          color: 16734039,
          footer: {
            text: 'Made by: Pontus Henriksson 💗',
          },
        },
      });
    if (isNaN(args[0]))
      return message.channel.send({
        embed: {
          title: 'Mountain Fields | Clear',
          description:
            "Please enter a real number of messages you want to clear for example ´mf.clear 10´.\n\n*You can't clear messages older than 14 days!*",
          color: 16734039,
          footer: {
            text: 'Made by: Pontus Henriksson 💗',
          },
        },
      });

    if (args[0] > 1000)
      return message.channel.send({
        embed: {
          title: 'Mountain Fields | Clear',
          description:
            "You can't delete more than 1000 messages at a time!\n\n*You can't clear messages older than 14 days!*",
          color: 16734039,
          footer: {
            text: 'Made by: Pontus Henriksson 💗',
          },
        },
      });
    if (args[0] < 1)
      return message.channel.send({
        embed: {
          title: 'Mountain Fields | Clear',
          description:
            "You must delete atleast one message!\n\n*You can't clear messages older than 14 days!*",
          color: 16734039,
          footer: {
            text: 'Made by: Pontus Henriksson 💗',
          },
        },
      });

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages);
    });
  },
};
