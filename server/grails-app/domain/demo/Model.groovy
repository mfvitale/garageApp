package demo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Resource( uri = '/api/model')
@Secured(['ROLE_DRIVER'])
class Model {

    String name

    static constraints = {
    }
}
