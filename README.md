# Symfony Collections Example

This codebase shows an example of files in Symfony on how to create many-to-many bidirectional relations using collections with the assistance of Doctrine.

# Usage

Whenever you need two entities created at the same time and relating to each other, Symfony collections come into play. Creating the forms and the models interlinked can become a challenge. 

The interesting things of note is the annotation within the Entities over the related variables to the other Entities. Also, keep in mind on the front end you will have to run a loop using Twig to get the entities to show. 

Lastly, I've included the javascript file to show how I made the adding of more than a single media file at a time without the hard coding of multiple forms. 

**Note**: This is only to be used as an example. Current Symfony versions do not use the same syntax for the form files, so modification will be required for the current version.