var banner = document.getElementById('banner');
var bannerRight = banner.lastElementChild;

var extSettingsButton = document.createElement('div');
extSettingsButton.classList.add('bel');
var extSettingsButtonContent = document.createElement('div');
extSettingsButton.appendChild(extSettingsButtonContent);
extSettingsButtonContent.classList.add('belcontent');
var extSettingsButtonLink = document.createElement('a');
extSettingsButtonContent.appendChild(extSettingsButtonLink);
extSettingsButtonLink.classList.add('bellink');
var extSettingsButtonIcon = document.createElement('i');
extSettingsButtonLink.appendChild(extSettingsButtonIcon);
extSettingsButtonIcon.classList.add('icon-cog-alt');
extSettingsButtonLink.innerHTML += 'NS# OPTIONS';

banner.appendChild(extSettingsButton);
banner.appendChild(bannerRight);
