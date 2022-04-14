var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
// How tu use this enum
var membership = Membership.Standard;
var membershipReverse = Membership[2]; // We are calling the second key in Membership 
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["INSTAGRAM"] = "Instagram";
    SocialMedia["LINKEDIN"] = "LinkedIn";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
