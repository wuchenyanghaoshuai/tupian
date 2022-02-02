library('delivery')
library('kkb-front-flow-plugin')

delivery {
    apply plugin: "flow"
    apply plugin: "kkb_k8s_front_deploy"

    config {
        category = "code"
        name = "tupian"
        release_repo="code/tupian"
        version = "1.0.0-${env.COMMIT_ID}"
        k8s_namespaces = ["dev": "kkb-dev","test":"kkb-test"]
    }
}
