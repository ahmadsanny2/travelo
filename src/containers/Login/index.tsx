import Layout from "components/Layout"
import styles from "./Login.module.css"
import Button from "components/Button"

const Login = () => {
    return (
        <Layout noFooter>
            <section className={styles.section}>
                <div className={styles.formWrapper}>
                    <p className="text-heading-3 font-label font-extrabold">Masuk</p>

                    <div className="flex mt-3">
                        <p className="text-heading-5 text-gray-50 font-semibold">Belum punya akun?</p>
                        <a href="#" className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline">
                            Daftar di sini
                        </a>
                    </div>

                    <form action="" className="flex flex-col gap-5 mt-8">
                        <input type="email" name="" id="" className="p-2" placeholder="Email" />
                        <input type="password" name="" id="" className="p-2" placeholder="Password" />
                        <Button>Masuk</Button>
                        </form>
                </div>
            </section>
        </Layout>
    )
}

export default Login