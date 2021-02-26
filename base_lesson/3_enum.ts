enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum socialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}
const social = socialMedia.INSTAGRAM
console.log(social)