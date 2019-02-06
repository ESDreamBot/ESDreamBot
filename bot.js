const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "=";
client.on('message', message => {
    if (message.content == "=سرعه") {
        var x = ["DreamKing",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"كانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "كانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == "=لغز") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', fkk => {
    if (fkk.content == "=فكك") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريء",
"بسم الله الرحمن الرحيم",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
		"خ ع ا خ ع",
        "ف ي ل ا",
		"ب ر ي ء",
		"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
		"ا ل ض ر و ر ة",
		"د ن ي ا",
		"ص ا ر م",
		"م ا ت",
		"ش ع ب ا ن ش ب ع ا ن",
		"أ ل ع ر ا ق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`اول شخص يفكك :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} لقد قمت بفكيك الجملة في الوقت المناسب`);
        })
        })
    }
})







client.on('message', message => {
    var prefix = '='
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message',async message => {
  if(message.content === '=unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**✅ Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  })



client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
 
 
 
 const moment = require("moment")
const fs = require("fs")
 
client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find('name', `welcome-l-مرحبا`)
let memberavatar = member.user.avatarURL
if (!welcomer) return;
if(welcomer) {
moment.locale('ar-ly');
var mrx = member.user;
let mrxembed = new Discord.RichEmbed()
.setTitle(mrx.username,`#${mrx.discriminator}`)
.addField('» Joined Discord ago',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
.addField('» Your Number',`${member.guild.memberCount}`,true)
.setThumbnail(mrx.avatarURL)
.setFooter("Zombie Games.")
welcomer.send({embed:mrxembed});          
}})
 

 
 
client.on('message', message => {//Mrx - Dev
    if (message.content.startsWith(prefix + 'sug')) {//Mrx - Dev
        if (message.author.bot) return//Mrx - Dev
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//Mrx - Dev
        var args =  message.content.split(' ').slice(1).join(' ')//Mrx - Dev
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})//Mrx - Dev
        let Room = message.guild.channels.find(`name`, "suggestions")//Mrx - Dev
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))//Mrx - Dev
        let embed = new Discord.RichEmbed()//Mrx - Dev
        .setColor('RANDOM')//Mrx - Dev
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)//Mrx - Dev
       .addField('**Suggestion**',`${args}`)//Mrx - Dev
       .setThumbnail(message.author.avatarURL)//Mrx - Dev
       .setFooter(`ID: ${message.author.id}`)//Mrx - Dev
       Room.sendEmbed(embed).then(c => {//Mrx - Dev
           c.react('✅').then(() => //Mrx - Dev
               c.react('❌'))//Mrx - Dev
           
       }).catch(e => console.error(e)//Mrx - Dev
       )
   }//Mrx - Dev
});//Mrx - Dev






client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("542681988776329216").send({embed:Dark});
    }
});







client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='=members')
     var IzRo = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setFooter(message.author.username, message.author.avatarURL) 
     .setTitle('🌷| Members info')
     .addBlankField(true)
     .addField('📗| Online ',
     `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
     .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
     .addField('📙| idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
     .addField('📓| Offline ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
     .addField('Members Count',`${message.guild.memberCount}`)
     message.channel.send(IzRo);
   });
   
   
   client.on("message", message => {
    var prefix = "="
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
   
   
   


client.on("message", (message) => {
    if(message.content.startsWith(prefix+"gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})
   


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('=bcall')){
 if (message.author.id !== '491884648276819968') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
   


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('=bcall')){
 if (message.author.id !== '434282754016935937') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
   






	  



	  
	  
 
	 


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ESDream Bot`,"http://twitch.tv/Light")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
