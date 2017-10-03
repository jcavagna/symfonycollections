<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ArticleType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('author')
            ->add('file')
            ->add('title')
            ->add('date')
            ->add('content')
            ->add('categories', null, array(
                'required' => false,
                'attr'     => array('class' => 'selectify')
                ))
            ->add('tags', null, array('required' => false))
            ->add('media', 'collection', array(
                'type'         => new MediaType(),
                'allow_add'    => true,
                'allow_delete' => true,
                'by_reference' => false,
                'required' => false));
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Article'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'appbundle_article';
    }
}
