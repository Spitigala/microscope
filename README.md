## Meteor Notes

Inclusions use the {{> templateName}} syntax, and simply tell Meteor to replace the inclusion with the template of the same name (in our case postItem ).

Expressions such as {{title}} either call a property of the current object, or the return value of a template helper as defined in the current template’s manager (more on this later).

Block helpers are special tags that control the flow of the template, such as {{#each}}... {{/each}} or {{#if}}...{{/if}} .

Code inside folders that are not client/ or server/ will run in both contexts. So the Posts collection is available to both client and server. However, what the collection does in each environment can be pretty different.

On the server, the collection has the job of talking to the MongoDB database, and reading and writing any changes. In this sense, it can be compared to a standard database library.
￼￼￼￼￼
To Var Or Not To Var?
In Meteor, the var keyword limits the scope of an object to the current file. Here, we want to make the Posts collection available to our whole app, which is why we’re not using the var keyword.
￼￼￼￼￼￼￼
On the client however, the collection is a copy of a subset of the real, canonical collection. The client-side collection is constantly and (mostly) transparently kept up to date with that subset in real-time.

create new collections:

Posts = new Mongo.Collection('posts');

Acess db with "meteor mongo"

When you declare Posts = new Mongo.Collection('posts'); on the client, what you are creating is a local, in-browser cache of the real Mongo collection.

