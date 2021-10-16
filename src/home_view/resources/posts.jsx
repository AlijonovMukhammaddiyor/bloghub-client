const posts = [
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_categories: ["Character", "Life"],
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title:
			"Four Fake Nice Gestures That Are Actually Manipulative. Something should break here actually.",
		subtitle:
			"Watch out for these signs of a person who isn’t as friendly as they seem. I know there is a function in haskell, isDigit that checks if it is a character or anything else.",
		content: `Almost forty years ago, in 1985, the idea of “Free Software” was born. That is not to say that the idea of sharing software with colleagues and making source code available was born. Ten years before the GNU Manifesto and the Free Software Foundation, I worked at a cloud services company (only we called it “timesharing” back then), and in order to encourage people to use our offerings and pay us for renting computer time and disk space and network bandwidth, we curated a collection of software libraries that customers could freely use. We called it the Public Library, of course. The software therein was public software. The idea of public software was software that anybody could freely use. What happened in 1985 was the birth of the idea that creation of software was a political act. And that when the creation of software was motivated by politics, it should be called free software to differentiate it from software created for other reasons. This became clear to be when I attended my first O’Reilly Open Source Conference, where I watched Miguel de Icaza debate Richard Stallman — and the question on the table was whether or not there was a difference between “free software” and “open source software”. The conclusion was that there was no detectable difference from examining the software or the license or any artifact. The difference was the intent of the programmer. If the intent was political (i.e. a concern for freedom), then the result was free software. If the intent was industrial, the result was open source software. I use the term industrial because the motivation of the open source crowd is to use what they believe to be a superior method of producing software.
			My interest in free or open source software has never been either political or industrial. My interest has always been educational. That is, access to the source code provided the opportunity to learn from it. So, in the same spirit as the Open Source / Free Software distinction, I coined the term Liberal Software to refer to software where the intent of the programmer is educational (liberal as in education). Any one of these three intents can produce software for which the source code is available — and that is often called FLOSS, meaning Free, Liberal, or Open Source Software.
			I prefer to think about these categories in terms of intent, because that opens the door to reflecting about effective strategies to implement that intent. So, for example, if it were to turn out that, all other things being equal, providing source code for libraries could be shown to produce software of inferior quality (and there is much evidence to support such a conclusion), then someone with an intent to produce industrial software might choose to pursue a course of action that did not involve making the source code available. The availability of source code is certainly invaluable in Liberal Software, and there are several scenarios regarding industrial software that require access to the source code. But that is a discussion for a different time.
			Today’s topic is political software. I think it is clear that the Free Software Foundation has failed to move the needle on the political issues relating to software. Those of us who are interested in issues of freedom and ethics and social justice related to software must explore alternative stratagems to achieve those objectives. The tactics of the Free Software Foundation (the insistence on copylefting software and fighting software patents) have become more and more ineffective. The world of software has evolved and changed in the years since 1985: we need to let the past die and build a better future.
			The first sign that free software is intellectually bankrupt is that the Free Software Foundation seems unable to develop new generations of leadership. Free societies are usually lukewarm to the practice of “dictators for life”. After around a decade, it is a healthy sign if new leadership emerges. It is a sign of growth and innovation. It is healthy. Seeing the same people in the same places pursuing the same failed tactics decade after decade is evidence of a lack of broader acceptance.
			Secondly, I am reminded of Harry Truman’s quote:\n\n
			It is amazing what you can accomplish if you do not care who gets the credit.\n\n
			The Free Software Foundation is famously fixated on insisting that it be given credit for Linux. Caring about who gets the credit more than successfully creating change is not a good look. It is, of course, consistent with the ego required to cling to power and smother the growth of the next generation. Linux is perhaps the child that succeeded where GNU failed.
			Thirdly, the rhetoric of Free Software devotees is awkward and unconvincing. The inflexibility (or inarticulateness) that has failed to evolve the talking points to make them more effective is a failure of politics. To take my own pet peeve, it is unarguable that inanimate objects cannot have freedoms. People have freedoms. Frying pans, as an example, cannot have freedoms. If one were to talk about Free Frying Pans, the only way to interpret that statement is that one is referring to frying pans that one needn’t pay for. When one uses the phrase “free press”, one is not suggesting that the pile of metal and wood that constitutes a printing press machine is entitled to freedoms. The word “press” in that phrase is a figure of speech known as metonymy. It refers to journalists. “Freedom of the press” is talking about the freedom bestowed on journalists. Most people understand that “the press” refers to the journalist collective. So when one says “free software” or “software freedom” we know that the freedom is not given to an executable file. The expression (unless we are referring to software that we needn’t pay for) is referring to freedom for some group of people that we know as “the software” (y’know, like “the press”). And who are those people who are members of “the software”? That was a rhetorical question. Please don’t try to explain it to me. I was pointing out how nonsensical this framing is. Rhetoric is a discipline that has been around for over two thousand years. We have two thousand years of scholarship that inform us that the phrase “software freedom” is meaningless gibberish. It can only sow confusion — and the confusion is only exacerbated by explaining that you used the words to mean something else entirely. That was Lewis Carroll’s point in Through the Looking Glass:
			“I don’t know what you mean by ‘glory’”, Alice said.\n\n
			Humpty Dumpty smiled contemptuously. “Of course you don’t — till I tell you. I meant ‘there’s a nice knock-down argument for you!’”
			“But ‘glory’ doesn’t mean ‘a nice knock-down argument’,” Alice objected.\n\n
			“When I use a word,” Humpty Dumpty said, in rather a scornful tone, “it means just what I choose it to mean — neither more nor less.”
			“The question is,” said Alice, “whether you can make words mean so many different things.”\n\n
			The Free Software coterie is fond of insisting that words mean what they say they mean, and that is a profound misunderstanding of the nature of language. Such linguistic naïveté is not an asset in pursuing political goals.
			With all that said, the intent of the adherents to the term Free Software is to seek to promote certain freedoms for the users of software, by depriving the creators of software (at least in the United States) of the rights afforded them by Congress under Article I, Section VIII, Clause VIII. Many programmers are under the impression that “software freedom” is meant to increase the freedoms of software producers. Nothing could be further from the truth. The GNU manifesto and Free Software Foundation take great pains to explain that their intent is to increase the freedom of computer users — at the expense, of course, of software producers. “The Software” is a metonym for software users. The difficulty is that the freedoms that the Free Software Foundation insists on giving software users are freedoms that most software users do not want, and the freedoms that they wish to restrict for software producers are freedoms that most software producers would rather retain. The so-called Free Software coterie might make more headway if it took the trouble to find out what freedoms “the software” (a/k/a software users — see how awkward this metonymy is) actually wanted. Instead they invest most of their energy trying to convince “the software” of which freedoms they ought to want. In that vein, the intent of the programmer who selects the license makes it “free software” or not — the intent of the user is not considered. If a user uses software with political intent, but it is not licensed in a way that the Free Software Foundation approves of, can “the software (meaning the user)” be exercising freedom?
			Prior to 1983, (two years before the Free Software Foundation was founded), all computers sold by IBM (which in those days meant pretty much “all computers”) came with the source code to the operating system. Like Linux (although you usually have to download the source code separately nowadays). Every company (because computers were so expensive that individuals couldn’t afford them) had a “data processing” staff which might make changes to the source code should the need arise (fixing problems, adding features). Many companies, however, were not large enough or sophisticated enough to have the kind of staff which could do this effectively. They would prefer to contract out the maintenance of the operating system software to the vendor (IBM). IBM, however, was unwilling to take this on, since everybody had the source code, and might have made modifications. IBM had no way to know what modifications might have been made, and consequently would be unable to accurately estimate how much work might need to be done. Eventually, due to persistent customer demand, they came up with their OCO (Object Code Only) program — in which you could receive the software WITHOUT the source code. In that case, IBM could provide a service contract for their software as they wouldn’t have to contend with individual local modifications. It turns out that computer users mostly wanted freedom FROM source code, rather than the freedom to use the source code to modify their operating system. Two years later, the Free Software Foundation was founded to try to foist the source code on people who didn’t want it.
			If your counter-argument to that is “but that was the 1980’s and the nature of software has changed since then — so that situation no longer applies” I have two responses. Firstly, the GNU manifesto was written in the 1980’s, and the nature of software has changed since then, so it no longer applies. Secondly, the largest Free Software business, Red Hat, has always had “freedom from source code” as its business model. A business pays Red Hat with the same licensing scheme as they would for any proprietary commercial operating system, in exchange for which Red Hat frees them from the inconvenience of needing to be exposed to the source code.
			Discussions of Free Software often start with the origin myth about access to the printer software source code at the MIT AI labs. Being denied the ability to get a notification when the network printer jams is fairly low down on the list of human rights violations. When discussing why Free Software partisans think “software freedom” is of any use or interest, the canonical answer is some form of the argument: fear the “bad actor”.
			This conspiracy theory goes something like this: If you can’t examine the source code, then some bad actor might provide you some executable software that has evil baked in, and you wouldn’t be able to tell — whereas the bad actor would not be able get away with such nefariousness if you had access to the source code. As with all conspiracy theories, two things are true. 1) If repeated often enough, people will start to believe it. 2) It is nonsense.
			Free-softwarists are right on their fundamental premise: this is a political issue. Protecting myself from bad actors is not my job. It is the government’s job. Americans like to perpetuate the myth that it is everybody’s job by pretending that the right to bear arms is somehow related to protecting one’s family. Somehow, we still need to spend close to two trillion dollars a year to hire government employees to protect us (military and police and border patrol and firemen and sheriffs and marshals and immigration agents and intelligence services). If owning a gun were sufficient to protect ourselves, we could save those two trillion dollars. But the same people who proudly display the weapons that they own (to protect themselves) are the first and loudest to insist that we need to spend trillions of dollars on government-employed protectors.
			Free-softwarites like to use beer metaphors (free as in beer). Let me suggest that if one were concerned with bad actors, one wouldn’t drink purchased beer (or free beer). One would brew one’s own beer, because bad actors might have poisoned the beer. And one would have to grow one’s own hops, (as bad actors might have poisoned purchased hops). And what might one use for water to brew the beer? Bad actors might have poisoned the water supply. One would need to dig one’s own well (unless, of course, the bad actors had polluted the water table). This way lies temperance.
			The alternative, of course, is to believe that you could safely purchase beer, because it is the government’s job to keep you safe. There might be government inspectors who inspect breweries. There might be laws against selling poisoned beer, and courts and district attorneys to go after beer poisoners and jails to incarcerate people who poison beer. There might nevertheless occasionally be a tragic instance of beer poisoning, but having a government agency whose job it is to keep the beer supply safe might be more effective than having each household test the beer they purchase to determine if it is safe — with the only punishment for the purveyors of poisoned beer being that some people might notice that the beer was poisoned and organize a boycott. The “bad actor” conspiracy theorists need to believe that many commercial actors are evil and all government actors are ineffective. And although I believe that there is the occasional evil entrepreneur and the occasional ineffective bureaucrat, in general, we must live our lives as if people are trying to do what they believe to be the right thing. Airplanes won’t usually fall out of the sky, restaurants won’t usually serve poisoned food, automobiles won’t usually explode, bridges won’t usually fall down when we drive over them. Software vendors won’t usually be inserting spyware into their wares. Q is not prescient. The evils are likely to be petty; misdemeanors rather than felonies.
			And on those occasions when bad actors are engaging in nefarious activity, a much better solution than having everybody auditing every line of source code for every bit of software they use, is to pass laws criminalizing such behavior and having a government cybercrime division tasked with punishing people who do that. And in this regard, free software is one of the bad actors. In the GPLv3 (and it was there in GPLv2 and v1) clauses 15 and 16 are the Disclaimer of Warranty and the Limitation of Liability. To be fair, proprietary software licenses have the same clauses, but the free-softers cannot claim the moral high ground here. These licenses assert that if the software causes any harm, the people who wrote it aren’t liable (limitation of liability). And also that the software is completely useless and it would surprise the author if it worked at all (disclaimer of warranty). UNLESS REQUIRED BY LAW. The paragraphs are in all caps to make extra sure you understand that GPL software is guaranteed to be broken by design and that nobody is responsible for the damage it causes. The free-softwarian defense of this “it’s OK to do evil” posture is that since the people writing the software aren’t charging money for it, you shouldn’t be able to sue them for any evil they might have accidentally baked in. And this is, of course, after arguing that programmers can make money with free software by charging for the labor of writing and packaging and distributing the software, but not for licensing it. In summary, the Free Software Foundation asserts that a) you can definitely make money writing free software, and b) you shouldn’t be held liable for any harm your software causes because you can’t make money writing free software.
			Of course, there are those five fateful words (in all caps): UNLESS REQUIRED BY APPLICABLE LAW. It seems that the intent of the GPL (and by extension, Free Software authors) is to be permitted to be as evil as possible (accidentally), brought up short only by applicable law. That, of course, is freedom. So, naturally, they assume that other (non-free) software authors will be equally unscrupulous. Put me down as being in favor of additional legislation to hold software authors liable for any damages they cause. And also of additional legislation to require them to warrant that the software is merchantable and fit for some purpose. I would like to see specific legislation that makes the person who provided me the software assume some risks as to the quality of the program. The existing free software license specifically states that “should the program prove defective, I assume the cost of all necessary servicing, repair or correction”. The existing free software license specifically states that “in no event shall any party be liable to me for damages for losses sustained by me for using the program”. As it turns out, there are many jurisdictions in which the applicable law voids the entire disclaimer — you can’t limit your liability by disclaiming it. The problem exists in those jurisdictions that allow the kinds of freedom-limiting licensing provisions embedded in the GPL to be enforceable. I wish that free-softies would aspire to emulate D J Bernstein, who offered, in 1997, $500 to anybody who found a security hole in his software qmail. ( https://cr.yp.to/qmail/guarantee.html )
			As a software user, as a member of that group of people known as “the software”, for whom “software freedom” applies, the freedom that I would like is the freedom to seek recompense from people who create damage to me via software. I would prefer software insurance to “software freedom”. When the GPL was written, when the term “Free Software” was coined, software was used for accounting software and text editors and printers. Nowadays, it is used to run MRI machines and radiation therapy machines and surgical robots and nuclear power plants and drive cars and fly airplanes, and so on. When the GPL was written, when software failed, it meant I didn’t get notifications about printer jams. Today, when software fails, it means I get a lethal dose of radiation. Maybe I would have been satisfied by the freedom to see the source code to the printer driver to deal with the paper jam. Today, however, the freedom that I want is not the freedom to see the source code to the radiation therapy machine. The freedom that I want is the freedom not to worry about receiving a lethal dose of radiation because the programmers who wrote the radiation therapy software took extra care because they know they would be harshly punished if they screwed up. That would make me feel much safer than a copy of the source code that I could peruse before being hooked up to a machine running software that was written by programmers who knew that nothing would happen to them, even if it killed me. I want the freedom to not have to audit every line of software of every software system I ever use, or which is used on me. That might have been possible in the 1970’s. It is not possible today. ( For those of you who think I’m concocting hypothetical scenarios for fear-mongering … I refer you to the incidents with Therac-25. https://en.wikipedia.org/wiki/Therac-25. The result being an international standard (IEC 62304) for medical device software. The authors of IEC 62304 identify a set of criteria to determine whether the software is sufficiently safe to be included in a medical device. Availability of the source code is not one of them.)`,
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title:
			"Four Fake Nice Gestures That Are Actually Manipulative. Something should break here actually. Let's check if this is working. NOt working I guess",
		subtitle:
			"Watch out for these signs of a person who isn’t as friendly as they seem. I know there is a function in haskell, isDigit that checks if it is a character or anything else.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle:
			"Watch out for these signs of a person who isn’t as friendly as they seem. I know there is a function in haskell, isDigit that checks if it is a char",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
	{
		author: {
			name: "Emma Gannon",
			bio: "Machine Learning Enthuthiast",
			followers: 1600,
		},
		date: "Aug 27",
		length: 7,
		category: "Life",
		sub_category: "Character",
		Img: "https://miro.medium.com/max/1400/1*4X74D902uwO786PQOWlAcg.jpeg",
		profileIcon: "https://miro.medium.com/max/2000/1*Kr-cdtOZrKYcLZOsk8j8hQ.jpeg",
		title: "Four Fake Nice Gestures That Are Actually Manipulative",
		subtitle: "Watch out for these signs of a person who isn’t as friendly as they seem.",
	},
];

export default posts;
