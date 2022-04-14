enum Membership {
    Simple,
    Standard,
    Premium,
}

// How tu use this enum

const membership = Membership.Standard

const membershipReverse = Membership[2]   // We are calling the second key in Membership 

console.log(membership)
console.log(membershipReverse)


enum SocialMedia {
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'Instagram',
    LINKEDIN = 'LinkedIn',
}

const social = SocialMedia.INSTAGRAM

console.log(social)