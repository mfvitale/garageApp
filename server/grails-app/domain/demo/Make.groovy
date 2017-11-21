package demo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Resource( uri = '/api/make')
@Secured(['ROLE_DRIVER'])
class Make {

    String name

    static constraints = {
    }
}
