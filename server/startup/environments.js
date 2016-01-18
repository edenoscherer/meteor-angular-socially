Meteor.startup(function () {
  smtp = {
    username: 'edeno@agenciawing.com.br',   // eg: server@gentlenode.com
    password: 'mktwingmD2118',   // eg: 3eeP1gtizk5eziohfervU
    server:   'mail.agenciawing.com.br',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});