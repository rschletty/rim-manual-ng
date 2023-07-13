---
layout: ../../layouts/toc.astro
title: "Installation"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
How you acquire and install Remote Incident Manager depends on your use case and configuration, but in any case the process is quite straight forward.
## Typical Installation for Individuals
There is only one installation package to use, whether you are offering or receiving assistance.
1. [Download Remote Incident Manager](https://download.pneumasolutions.com/rim/rimsetup.exe)
1. Run the downloaded file.
1. If you have user account control enabled, press Alt+Y to approve the installation.
1. Once the file is launched, the installation will automatically commence. There are no next buttons to worry about. Just sit back, relax, and let it do its thing. Within seconds, the program will be installed and will launch automatically.
<!-- end -->
That's all there is to it! A desktop shortcut will be automatically created to aid in subsequent launches of RIM. Additionally, RIM sets up a multipurpose global hotkey (*Windows+Shift+Backspace*) which, among other things, automatically launches the program from wherever you are.
## Unattended Access Installer
If the person providing assistance has provided you a custom installer, you will be advised of this when the installer launches. This is because this installer will automatically configure RIM for what is known as unattended access. This is what will allow the person helping you to initiate a session with your computer without you having to enter a keyword. We will cover unattended access indepth later on in this manual.
## Silent Installation
You'll want to do this when deploying RIM to multiple machines. Simply use the */S* command line parameter in your deployment script. Note that it is case-sensitive, so a capital S is required.
## Additional Considerations for Windows Servers
To install RIM on your Windows Server, connect to the server via RDP. In order to get the most stable connection experience, we recommend using the Remote Desktop app from the Microsoft Store.
### Obtaining Sound and running Narrator
In order to obtain sound, do the following once connected:
1. Press windows key+r.
1. Type cmd and hit enter. Wait about ten seconds.
1. Type:  
`net start audiosrv`  
and hit enter.
1. Now, press CTRL+Windows+Enter to enable Narrator. If everything worked properly, you should get speech.
<!-- end -->
You can now follow the install procedure as described above.  
Please note that if you need sound for subsequent connections via RIM, you will need to install a virtual sound output device on your server. The free version of [Virtual Audio Cable](http://virtualaudiocable.org/download/software/VACSetup.exe) should suffice.