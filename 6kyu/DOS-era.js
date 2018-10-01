const helpInfo = {
	ATTRIB:
	{
		preview: 'display or change file properties.',
		details: 'ATTRIB [+R | -R] [+A | -A ] [+S | -S] [+H | -H] [[drive:] [path] filename] [/S [/D]]'
	},
	CD:
	{
		preview: 'displays the name of the current directory or changes it.',
		details: 'CHDIR [/D] [drive:][path]\nCHDIR [..]\nCD [/D] [drive:][path]\nCD [..]'
	},
	CHKDSK:
	{
		preview: 'check disk and display status report.',
		details: 'CHKDSK [volume[[path]filename]]] [/F] [/V] [/R] [/X] [/I] [/C] [/L[:size]]'
	},
	CLS: { preview: 'clear screen.', details: 'CLS' },
	COPY:
	{
		preview: 'copy at least one file to another location.',
		details: 'COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/A | /B ] source [/A | /B]\n[+ source [/A | /B] [+ ...]] [destination [/A | /B]]'
	},
	DATE:
	{
		preview: 'display or set date.',
		details: 'DATE  [/T | date]'
	},
	DEL:
	{
		preview: 'delete at least one file.',
		details: 'DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names'
	},
	DIR:
	{
		preview: 'displays a directory of files and sub directories.',
		details: 'DIR [drive:][path][filename] [/A[[:]attributes]] [/B] [/C] [/D] [/L] [/N]\n[/O[[:]sortorder]] [/P] [/Q] [/S] [/T[[:]timefield]] [/W] [/X] [/4]'
	},
	FORMAT:
	{
		preview: 'formatted disk for use with Windows.',
		details: 'FORMAT volume [/FS:file-system] [/V:label] [/Q] [/A:size] [/C] [/X]\nFORMAT volume [/V:label] [/Q] [/F:size]\nFORMAT volume [/V:label] [/Q] [/T:tracks /N:sectors]\nFORMAT volume [/V:label] [/Q]\nFORMAT volume [/Q]'
	},
	HELP:
	{
		preview: 'provides help information for DOS commands.',
		details: 'HELP [command]'
	},
	MD:
	{
		preview: 'create directory.',
		details: 'MKDIR [drive:]path\nMD [drive:]path'
	},
	MOVE:
	{
		preview: 'to move files from one directory to another.',
		details: 'to move at least one directory:\nMOVE [/Y | /-Y] [drive:][path]filename1[,...] destination\nto rename one directory:\nMOVE [/Y | /-Y] [drive:][path]dirname1 dirname2'
	},
	RD:
	{
		preview: 'delete directory.',
		details: 'RD [/S] [/Q] [drive:]path'
	},
	REN:
	{
		preview: 'rename file.',
		details: 'REN [drive:][path]filename1 filename2.'
	},
	TIME:
	{
		preview: 'displays or sets the system time.',
		details: 'TIME [/T | time]'
	},
	XCOPY:
	{
		preview: 'copy file and directory tree.',
		details: 'XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]\n[/C] [/I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T] [/U]\n[/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z]\n[/EXCLUDE:file1[+file2][+file3]...]'
	}
};

function help(cmd) {
	cmd = cmd.toUpperCase() || "";
	switch (true) {
		case (cmd === ""): {
			var cmdArr = [];
			cmdArr.push("list of commands goes here");
			return cmdArr;
		}
		case (cmd === "/?"): {
			return helpInfo["HELP"].preview.concat("\n\n", helpInfo["HELP"].details);
		}
		case (Object.keys(helpInfo).includes(cmd)): {
			return helpInfo[cmd].preview.concat("\n\n", helpInfo[cmd].details);
		}
		default: {
			return "Help utility does not support this command.";
		}
	}
}

// console.log(help("copy"));
console.log(help("help"));
console.log(help("abc"));
console.log(help("/?"));
console.log(help(""));
console.log(help("copy"));

// console.log(Object.keys(helpInfo));
// console.log(Object.keys(helpInfo)[0], Object.values(helpInfo)[0].preview);
// console.log(helpInfo.XCOPY["preview"], "\n\n", helpInfo.XCOPY.details);
