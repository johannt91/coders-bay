const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'You can remove bullets by setting the list-style-type to none on the CSS for the parent element.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'If you\'re using Bootstrap, it has an "unstyled" class.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'ID and NAME tokens must begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".").',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'jQuery does handle any valid ID name. You just need to escape metacharacters (i.e., dots, semicolons, square brackets...).',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Try using: <meta http-equiv="refresh" content="0; url=http://example.com/" />  Note: Place it in the head section.',
    user_id: 7,
    post_id: 3
  },
  {
    comment_text: 'With localStorage, web applications can store data locally within the user\'s browser. Before HTML5, application data had to be stored in cookies, included in every server request.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'Well, local storage speed greatly depends on the browser the client is using, as well as the operating system.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'I have helped many with web profiles. I am proficient in CSS. Rate: $15/hr',
    user_id: 7,
    post_id: 6
  },
  {
    comment_text: 'We specialize in making custom full stack websites for inventory management systems. Rate $50/hr',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'I regulary use Heroku and have helped many with maintaining there Heroku site. Rate $30/hr',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 11,
    post_id: 5
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 7
  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    post_id: 3
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 4
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 7
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 2
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 3
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 4
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 5
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 6
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 6
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 7,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
