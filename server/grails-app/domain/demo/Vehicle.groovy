package demo

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Resource(uri = '/api/vehicle')
@Secured(['ROLE_DRIVER'])
class Vehicle {

    String name

    Make make
    Model model

    static belongsTo = [driver: Driver]

    static constraints = {
    }
}
