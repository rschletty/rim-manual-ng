---
layout: ../../layouts/toc.astro
title: "Le tableau de bord de gestion du RIM"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
RIM dispose d'un tableau de bord basé sur le web pour faciliter les différentes tâches de gestion des machines et des comptes. Vous pouvez gérer vos ordinateurs existants sans surveillance, créer des installateurs préconfigurés pour les ordinateurs cibles, et bien plus encore.  
Il convient de noter que l'ensemble des fonctionnalités du tableau de bord dépend en grande partie de la catégorie d'abonnement à laquelle appartient votre compte. Par exemple, les utilisateurs d'entreprise peuvent affecter des machines à des groupes cibles et créer des programmes d'installation silencieux et/ou basés sur des MSI. D'autre part, la création d'installateurs personnalisés standard (non silencieux) pour les machines non surveillées est possible avec un abonnement pro ou supérieur.
## Localisation du tableau de bord
Si vous êtes un contrôleur, le moyen le plus simple d'accéder au tableau de bord est de passer par l'interface principale de RIM. En cliquant sur le bouton RIM Dashboard, vous ouvrirez automatiquement le tableau de bord dans votre navigateur par défaut, la connexion étant déjà prise en charge.  
Si vous êtes un administrateur de réseau et que RIM n'est pas installé, vous pouvez simplement vous connecter à votre compte sur le site Web de RIM et votre tableau de bord apparaîtra.
## Gestion des cibles
Lorsque vous cliquez sur le lien "Configure Targets", vous arrivez sur une page qui vous permet de gérer toutes les machines que vous avez configurées pour un accès sans surveillance. Vous pouvez cliquer sur n'importe laquelle de ces machines pour la gérer. Une fois à l'intérieur, vous pourrez
* Renommer la cible
* Déplacer la cible vers un groupe différent (plus d'informations sur les groupes de cibles ultérieurement)
* Supprimer la cible
<!-- end -->
## Groupes cibles (pour les comptes Pro et supérieurs)
Supposons que votre groupe de travail soit réparti sur plusieurs sites. Ou peut-être voulez-vous désigner des groupes de machines pour vos techniciens de maintenance de routine. Les groupes cibles vous permettent de le faire. Pour ce faire, il vous suffit de cliquer sur le bouton "Créer un groupe cible", de donner un nom à votre groupe et de valider.  
Vous pouvez avoir autant de groupes cibles que nécessaire pour votre cas d'utilisation. 
contrôle d'accès ### (pour les entreprises)
Si votre organisation affecte un technicien de support à un ensemble spécifique de machines, vous voulez probablement vous assurer qu'il n'a accès qu'à cet ensemble spécifique. C'est là qu'intervient le paramètre de contrôle d'accès pour les groupes cibles.  
Lorsque vous cliquez sur un groupe cible, vous disposez d'options pour gérer les machines du groupe, ainsi que le groupe lui-même. La section de contrôle d'accès vous permet d'accorder l'accès à ce groupe par compte. Saisissez simplement l'adresse électronique du compte que vous souhaitez ajouter, puis cliquez sur le bouton "Donner accès". Une fois cette opération effectuée, vous obtiendrez un tableau des comptes auxquels l'accès à ce groupe a été accordé. Sous chaque compte se trouve un bouton "Révoquer l'accès". Ce bouton ne nécessite pas de confirmation supplémentaire.  
Il convient de noter que tous les administrateurs d'organisations se voient automatiquement accorder l'accès à la gestion de tous les groupes créés dans le cadre de l'organisation.
## Mise en place d'un programme d'installation RIM préconfiguré (Pro ou supérieur, cibles Windows uniquement)
L'un des moyens les plus simples de configurer une machine pour des connexions sans surveillance ou assistées consiste à créer un programme d'installation personnalisé. Cette méthode est extrêmement utile si vous configurez des déploiements de masse, ou même comme moyen plus simple de faire fonctionner RIM sur l'ordinateur d'un utilisateur final pour lequel vous prévoyez de fournir une assistance régulière.
Pour ce faire, il faut
1. Dans l'écran de gestion des cibles, cliquez sur le bouton "Build Target Installer".
1. Il vous sera d'abord demandé si vous souhaitez que cette machine soit configurée pour un accès sans surveillance ou pour un accès avec invite, dans lequel l'utilisateur doit accepter une invite pour initier la connexion.
1. Il vous sera ensuite demandé d'assigner un groupe cible. Notez que la sélection du groupe cible ira automatiquement au groupe cible que vous avez choisi si vous lancez la configuration de l'installateur à partir de la page de votre groupe.
1. Il vous sera demandé de préciser la durée de validité du programme d'installation. La durée de validité peut être comprise entre 7 et 30 jours. Notez que cette durée n'affecte que la fonctionnalité du paquet d'installation. En d'autres termes, la configuration RIM de la machine ne sera pas désactivée à l'expiration de l'installation.
1. Vous avez ensuite la possibilité d'attribuer un nom de basse. Ce nom de base sera attribué à toute machine approvisionnée via ce paquet d'installation.
1. Si vous êtes un administrateur d'entreprise, vous verrez une case à cocher qui vous permet de créer le programme d'installation en tant que paquet MSI. Cette option est utile pour le déploiement en masse d'un programme d'installation personnalisé sur une grappe de machines qui seront désignées pour le groupe cible donné.
1. Il vous sera demandé de fournir un nom d'installateur, et éventuellement quelques notes. Celles-ci sont destinées à un usage interne et n'apparaîtront pas dans le programme d'installation créé.
1. Cliquez sur "Build Installer" Vous obtiendrez un lien de téléchargement que vous pourrez copier dans le presse-papiers et envoyer à l'utilisateur final. Vous pouvez également télécharger directement le programme d'installation pour l'utiliser lors de déploiements massifs.
<!-- end -->
Maintenant que vous avez votre programme d'installation, vous pouvez l'exécuter de deux manières. Dans les deux cas, la machine sera ajoutée à votre liste de machines dans votre compte et dans le client RIM une fois le programme d'installation terminé.
### Exécution normale
Lors de l'exécution du programme d'installation, l'utilisateur reçoit une invite contenant les informations suivantes :
* Le nom du technicien ainsi que son organisation, le cas échéant
* la nature de la connexion, c'est-à-dire si une invite est nécessaire ou non
<!-- end -->
L'utilisateur peut choisir de répondre par oui ou par non à l'installation. La réponse négative annule l'installation. Une fois le programme d'installation terminé, l'utilisateur reçoit une invite l'informant que son ordinateur est maintenant configuré pour l'accès à distance.
### Installation silencieuse (installateurs d'entreprise uniquement)
Une installation silencieuse peut être lancée en exécutant le programme d'installation exécutable avec le paramètre de ligne de commande */S*. Cette fonction est utile lors de l'installation de RIM dans le cadre d'un déploiement de masse.
## Historique des sessions
Vous pouvez consulter l'historique complet de vos sessions passées dans le tableau de bord de RIM. L'historique des sessions contient actuellement la date et l'heure de chaque session, le nom de l'ordinateur auquel vous vous êtes connecté et la durée de la session. Vous pouvez également choisir d'ajouter des commentaires à une session en cliquant sur le lien "Ajouter un commentaire" dans la ligne de la session. Cette fonction est utile pour ajouter des notes sur l'état actuel d'un incident, tant pour vous que pour les administrateurs de l'organisation.
## Gestion de votre abonnement (plans personnel et pro)
Le tableau de bord vous permet de visualiser et de gérer facilement les détails de votre abonnement RIM. En cliquant sur le lien "gérer l'abonnement", vous pouvez :
* Passer à un plan supérieur
* Mettre à jour votre mode de paiement
* Annuler les paiements récurrents
<!-- end -->
### Mise à niveau de votre plan
Vous pouvez facilement mettre à jour votre abonnement. Si vous bénéficiez d'un abonnement mensuel, vous serez facturé au prorata des frais restants du nouveau montant, le nouveau montant total étant facturé pour les mois suivants. En cliquant sur "Upgrade Subscription", vous accédez à une page presque identique à la page de sélection du plan initial. Il existe quelques différences notables que nous décrivons ci-dessous :
* Vous ne pouvez pas rétrograder votre plan vers un plan comportant moins de machines. Vous pouvez cependant passer d'un abonnement mensuel à un abonnement annuel avec le même nombre de machines que votre abonnement actuel. Pour rétrograder, vous devez annuler votre plan, attendre qu'il expire, puis lancer un nouveau plan avec moins de machines.
* Les plans d'entreprise, y compris l'addon d'entreprise, ne peuvent pas être achetés directement sur cette page.
<!-- end -->
### Annulation des paiements récurrents
Lorsque vous cliquez sur "Annuler le renouvellement automatique", une confirmation vous sera demandée, après quoi votre abonnement expirera à la fin de la période en cours.