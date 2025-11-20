import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    setDoc,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDaLn0RDuUFFoeEmO9--KQ3ymmsUhUgW5E",
    authDomain: "easingliving.firebaseapp.com",
    projectId: "easingliving",
    storageBucket: "easingliving.firebasestorage.app",
    messagingSenderId: "377401407784",
    appId: "1:377401407784:web:2f74790cd5f533c739381d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUserData = null;
let currentAuthUser = null;

const dadosProjetos = {
    "padrao": {
        titulo: "Casa Contemporânea 120m²",
        categoria: "Padrão",
        preco: "R$ 450.000,00",
        descricao: "Ideal para famílias pequenas. Design inteligente que maximiza o espaço, com integração total entre sala e cozinha.",
        responsavel: "Arq. Estela Fontes",
        img: "assets/ContemporaryHouse120m2/contemporaryHouseExternal.png",
        galeria: [
            "assets/ContemporaryHouse120m2/contemporaryHouseExternal.png",
            "assets/ContemporaryHouse120m2/contemporaryHouseHall.png",
            "assets/ContemporaryHouse120m2/contemporaryHouseRoom.png",
            "assets/ContemporaryHouse120m2/contemporaryHouseBathroom.png"
        ]
    },
    "medio-alto": {
        titulo: "Sobrado Moderno 200m²",
        categoria: "Médio-Alto",
        preco: "R$ 950.000,00",
        descricao: "Conforto e design em dois pavimentos. Fachada imponente com pé direito duplo e área de lazer completa.",
        responsavel: "Arq. Estela Fontes",
        img: "assets/ModernTownhouse200m2/modernTownhouseExternal.png",
        galeria: [
            "assets/ModernTownhouse200m2/modernTownhouseExternal.png",
            "assets/ModernTownhouse200m2/ModernTownhouseHall.png",
            "assets/ModernTownhouse200m2/ModernTownhouseRoom.png",
            "assets/ModernTownhouse200m2/ModernTownhouseBathroom.png"
        ]
    },
    "alto": {
        titulo: "Residência de Luxo 350m²",
        categoria: "Alto Padrão",
        preco: "R$ 1.950.000,00",
        descricao: "Exclusividade e sofisticação. Acabamentos premium, automação residencial completa e amplas suítes.",
        responsavel: "Arq. Estela Fontes",
        img: "assets/LuxuryResidence350m2/luxuryResidenceExternal.png",
        galeria: [
            "assets/LuxuryResidence350m2/luxuryResidenceExternal.png",
            "assets/LuxuryResidence350m2/luxuryResidenceHall.png",
            "assets/LuxuryResidence350m2/luxuryResidenceBathroom.png"
        ]
    },
    "excelente": {
        titulo: "Mansão Exclusiva 600m²",
        categoria: "Excelente",
        preco: "R$ 4.500.000,00",
        descricao: "O ápice do luxo e da arquitetura. Uma obra de arte habitável com adega, academia privativa e paisagismo assinado.",
        responsavel: "Arq. Estela Fontes",
        img: "assets/ExclusiveMansion600m2/exclusiveMansionExternal.png",
        galeria: [
            "assets/ExclusiveMansion600m2/exclusiveMansionExternal.png",
            "assets/ExclusiveMansion600m2/exclusiveMansionHall.png",
            "assets/ExclusiveMansion600m2/exclusiveMansionRoom.png",
            "assets/ExclusiveMansion600m2/exclusiveMansionBathroom.png"
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {

    const htmlElement = document.documentElement;

    const toggleTheme = () => {
        htmlElement.classList.toggle("dark");
        const isDark = htmlElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcons(isDark);
    };

    const updateThemeIcons = (isDark) => {
        document.getElementById("theme-toggle-dark-icon").classList.toggle("hidden", !isDark);
        document.getElementById("theme-toggle-light-icon").classList.toggle("hidden", isDark);
        document.getElementById("theme-toggle-dark-icon-mobile").classList.toggle("hidden", !isDark);
        document.getElementById("theme-toggle-light-icon-mobile").classList.toggle("hidden", isDark);
    };

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("theme-toggle-mobile").addEventListener("click", toggleTheme);

    if (localStorage.getItem("theme") === "dark") {
        htmlElement.classList.add("dark"); updateThemeIcons(true);
    }

    const mobileMenu = document.getElementById("mobile-menu");
    document.getElementById("mobile-menu-button").addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    document.querySelectorAll(".nav-link-mobile").forEach(l => l.addEventListener("click", () => mobileMenu.classList.add("hidden")));

    onAuthStateChanged(auth, async (user) => {
        if (user) {

            currentAuthUser = user;

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                currentUserData = docSnap.data();
            } else {
                currentUserData = { role: 'client', name: user.email };
            }

            updateAuthUI(true);

            if (window.location.hash === '#login' || window.location.hash === '#cadastro') {
                window.location.hash = "#dashboard";
            }

            if (window.location.hash === '#dashboard') {
                renderDashboard();
            }

        } else {
            currentAuthUser = null;
            currentUserData = null;
            updateAuthUI(false);
        }
    });

    const updateAuthUI = (isLogged) => {
        const isAdmin = currentUserData && currentUserData.role === 'admin';
        const btnText = isAdmin ? "Gerenciar" : "Meus Pedidos";

        document.getElementById("header-login-link").style.display = isLogged ? "none" : "block";
        const accLink = document.getElementById("header-account-link");

        if (isAdmin) {
            document.querySelectorAll('.nav-link').forEach(el => el.style.display = 'none');
            accLink.style.display = "block";
            accLink.innerText = "Painel Administrativo";
        } else {
            document.querySelectorAll('.nav-link').forEach(el => el.style.display = 'block');
            accLink.innerText = "Meus Pedidos";
            accLink.style.display = isLogged ? "block" : "none";
        }

        document.getElementById("header-logout-button").style.display = isLogged ? "block" : "none";

        document.getElementById("mobile-login-link").style.display = isLogged ? "none" : "block";
        const accLinkMobile = document.getElementById("mobile-account-link");
        accLinkMobile.style.display = isLogged ? "block" : "none";
        accLinkMobile.innerText = btnText;
        document.getElementById("mobile-logout-button").style.display = isLogged ? "block" : "none";
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.hash = "#home";
            alert("Você saiu com sucesso.");
        } catch (error) {
            console.error("Erro ao sair", error);
        }
    };
    document.getElementById("header-logout-button").addEventListener("click", handleLogout);
    document.getElementById("mobile-logout-button").addEventListener("click", handleLogout);

    document.querySelector("#page-login form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email-login").value;
        const pass = document.getElementById("password-login").value;
        const btn = e.target.querySelector('button');

        try {
            btn.innerText = "Entrando...";
            btn.disabled = true;
            await signInWithEmailAndPassword(auth, email, pass);
        } catch (error) {
            alert("Erro ao entrar: " + error.message);
        } finally {
            btn.innerText = "Entrar";
            btn.disabled = false;
        }
    });

    document.querySelector("#form-cadastro").addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome-cadastro").value;
        const email = document.getElementById("email-cadastro").value;
        const pass = document.getElementById("password-cadastro").value;
        const btn = e.target.querySelector('button');

        if (pass.length < 8) return alert("Senha deve ter no mínimo 8 caracteres");

        try {
            btn.innerText = "Cadastrando...";
            btn.disabled = true;

            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name: nome,
                email: email,
                role: "client",
                createdAt: new Date()
            });

            alert("Conta criada com sucesso!");

        } catch (error) {
            alert("Erro ao cadastrar: " + error.message);
        } finally {
            btn.innerText = "Cadastrar";
            btn.disabled = false;
        }
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Novo': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'Em Análise': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Concluído': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const getTypeName = (type) => type === 'lote_proprio' ? 'Lote Próprio' : 'Compra de Lote';

    const renderDashboard = async () => {
        const tbody = document.getElementById("dash-table-body");
        tbody.innerHTML = '<tr><td colspan="5" class="p-4 text-center">Carregando dados...</td></tr>';

        if (!currentUserData) return;

        const isAdmin = currentUserData.role === 'admin';
        const dashTitle = document.getElementById("dash-title");
        dashTitle.innerText = isAdmin ? "Gerenciar Pedidos" : "Meus Pedidos";
        document.getElementById("dash-user-name").innerText = `Olá, ${currentUserData.name}`;
        document.getElementById("admin-controls").classList.toggle("hidden", !isAdmin);

        try {
            let q;
            const requestsRef = collection(db, "requests");

            if (isAdmin) {
                q = query(requestsRef, orderBy("createdAt", "desc"));
            } else {
                q = query(requestsRef, where("userId", "==", currentAuthUser.uid), orderBy("createdAt", "desc"));
            }

            const querySnapshot = await getDocs(q);
            let requests = [];

            querySnapshot.forEach((doc) => {
                requests.push({ firebaseId: doc.id, ...doc.data() });
            });

            if (isAdmin) {
                const searchVal = document.getElementById("dash-search-text").value.toLowerCase();
                const filterCat = document.getElementById("dash-filter-cat").value;
                const filterStat = document.getElementById("dash-filter-status").value;
                const filterType = document.getElementById("dash-filter-type").value;

                requests = requests.filter(req => {
                    const matchText = (req.protocolo || '').toLowerCase().includes(searchVal) || (req.client || '').toLowerCase().includes(searchVal);
                    const matchCat = filterCat === 'all' || req.category === filterCat;
                    const matchStat = filterStat === 'all' || req.status === filterStat;
                    const matchType = filterType === 'all' || req.type === filterType;
                    return matchText && matchCat && matchStat && matchType;
                });
            }

            tbody.innerHTML = "";
            if (requests.length === 0) {
                document.getElementById("dash-empty").classList.remove("hidden");
            } else {
                document.getElementById("dash-empty").classList.add("hidden");

                requests.forEach(req => {
                    const tr = document.createElement("tr");
                    tr.className = "border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors";
                    tr.innerHTML = `
                        <td class="p-4 font-mono text-sm font-medium text-gray-600 dark:text-gray-300">${req.protocolo}</td>
                        <td class="p-4 text-gray-800 dark:text-gray-200 font-medium">${req.client}</td>
                        <td class="p-4 text-sm text-gray-600 dark:text-gray-400">
                            <div class="flex flex-col">
                                <span>${req.category}</span>
                                <span class="text-xs text-gray-400">${getTypeName(req.type)}</span>
                            </div>
                        </td>
                        <td class="p-4">
                            <span class="px-3 py-1 rounded-full text-xs border font-bold shadow-sm ${getStatusBadge(req.status)}">
                                ${req.status}
                            </span>
                        </td>
                        <td class="p-4 text-right">
                            <button class="text-primary-light dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm btn-ver-detalhe underline" data-id="${req.firebaseId}">Ver Detalhes</button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });

                document.querySelectorAll(".btn-ver-detalhe").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        const id = e.target.getAttribute("data-id");
                        const reqData = requests.find(r => r.firebaseId === id);
                        openRequestModal(reqData);
                    });
                });
            }

        } catch (error) {
            console.error("Erro ao buscar dashboard:", error);
            tbody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-red-500">Erro ao carregar dados. Se for a primeira vez, crie os índices no Firebase Console.</td></tr>';
        }
    };

    ['dash-search-text', 'dash-filter-cat', 'dash-filter-status', 'dash-filter-type'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(el.tagName === 'INPUT' ? 'keyup' : 'change', renderDashboard);
    });
    document.getElementById('btn-clear-filters')?.addEventListener('click', () => {
        document.getElementById("dash-search-text").value = "";
        document.getElementById("dash-filter-cat").value = "all";
        document.getElementById("dash-filter-status").value = "all";
        document.getElementById("dash-filter-type").value = "all";
        renderDashboard();
    });

    const openRequestModal = (req) => {
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = `
            <div class="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div class="flex justify-between items-center border-b pb-2 dark:border-gray-700">
                    <span class="font-bold text-lg text-gray-800 dark:text-white">${req.protocolo}</span>
                    <span class="px-2 py-1 rounded text-xs font-bold ${getStatusBadge(req.status)}">${req.status}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p class="text-xs uppercase tracking-wide text-gray-400">Cliente</p>
                        <p class="font-medium text-gray-800 dark:text-white">${req.client}</p>
                    </div>
                    <div>
                        <p class="text-xs uppercase tracking-wide text-gray-400">Data</p>
                        <p>${req.date}</p>
                    </div>
                    <div>
                        <p class="text-xs uppercase tracking-wide text-gray-400">Contato</p>
                        <p>${req.email}</p>
                        <p>${req.phone}</p>
                    </div>
                    <div>
                        <p class="text-xs uppercase tracking-wide text-gray-400">Obra</p>
                        <p class="font-medium">${req.category}</p>
                        <p>${getTypeName(req.type)}</p>
                    </div>
                    <div class="md:col-span-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                        <p class="text-xs uppercase tracking-wide text-gray-400 mb-1">Endereço da Obra</p>
                        <p class="font-mono">${req.address}</p>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("admin-modal").classList.add("open");
    };
    document.getElementById("close-modal").addEventListener("click", () => document.getElementById("admin-modal").classList.remove("open"));

    document.getElementById("form-solicitacao").addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');

        if (currentUserData && currentUserData.role === "admin") {
            alert("Admins não podem criar solicitações.");
            return;
        }

        try {
            btn.innerText = "Enviando...";
            btn.disabled = true;

            const protocolo = "EL-" + Math.random().toString(36).substr(2, 4).toUpperCase() + Math.floor(Math.random() * 1000);
            const novoPedido = {
                userId: currentAuthUser.uid,
                protocolo: protocolo,
                client: currentUserData ? currentUserData.name : document.getElementById("sol-nome").value,
                email: currentAuthUser.email,
                category: document.getElementById("sol-pacote").options[document.getElementById("sol-pacote").selectedIndex].text,
                type: document.getElementById("sol-tipo-obra").value,
                status: "Novo",
                date: new Date().toLocaleDateString("pt-BR"),
                phone: document.getElementById("sol-telefone").value,
                address: document.getElementById("sol-endereco").value,
                createdAt: new Date()
            };

            await addDoc(collection(db, "requests"), novoPedido);

            document.getElementById("protocolo-numero").innerText = protocolo;
            window.location.hash = "#conclusao";

        } catch (error) {
            console.error("Erro ao solicitar:", error);
            alert("Erro ao enviar solicitação.");
        } finally {
            btn.innerText = "Concluir Solicitação";
            btn.disabled = false;
        }
    });

    const showPage = (pageId) => {
        document.querySelectorAll(".page-section").forEach(p => {
            p.style.display = (p.id === pageId) ? "block" : "none";
            if (p.id === pageId) p.classList.add("active");
        });
        window.scrollTo(0, 0);
    };

    const handleNavigation = () => {
        let hash = window.location.hash.substring(1) || "home";

        if (currentUserData && currentUserData.role === "admin" && hash !== "dashboard") {
            hash = "dashboard";
        }

        if (hash === "dashboard") {
            if (!currentAuthUser) { alert("Faça login."); window.location.hash = "#login"; return; }
            renderDashboard();
            showPage("page-dashboard");
            return;
        }

        if (hash.startsWith("detalhe-pacote/")) {
            const pacoteId = hash.split("/")[1];
            const dados = dadosProjetos[pacoteId];
            if (dados) {
                document.getElementById("detalhe-titulo").innerText = dados.titulo;
                document.getElementById("detalhe-categoria").innerText = dados.categoria;
                document.getElementById("detalhe-preco").innerText = dados.preco;
                document.getElementById("detalhe-descricao").innerText = dados.descricao;
                if (document.getElementById("responsavel")) document.getElementById("responsavel").innerText = dados.responsavel;
                const imgEl = document.getElementById("detalhe-img");
                if (imgEl) imgEl.src = dados.img;
                document.getElementById("btn-solicitar").href = `#solicitacao/${pacoteId}`;

                const galeriaContainer = document.getElementById("detalhe-galeria");
                if (galeriaContainer) {
                    galeriaContainer.innerHTML = "";
                    dados.galeria.forEach(src => {
                        const img = document.createElement("img");
                        img.src = src;
                        img.className = "h-20 w-full object-cover rounded-lg cursor-pointer hover:opacity-75 border border-gray-200";
                        img.onclick = () => { if (imgEl) imgEl.src = src; };
                        galeriaContainer.appendChild(img);
                    });
                }
                showPage("page-detalhe-pacote");
                return;
            }
        }

        if (hash.startsWith("solicitacao")) {
            if (!currentAuthUser) { alert("Faça login primeiro."); window.location.hash = "#login"; return; }
            showPage("page-solicitacao");
            const param = hash.split("/")[1];
            if (param) document.getElementById("sol-pacote").value = param;
            return;
        }

        const pageId = "page-" + hash;
        if (document.getElementById(pageId)) showPage(pageId);
        else showPage("page-home");
    };

    window.addEventListener("hashchange", handleNavigation);
    handleNavigation();

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active-filter"));
            btn.classList.add("active-filter");
            const filter = btn.getAttribute("data-filter");
            document.querySelectorAll(".card-projeto").forEach(card => {
                card.style.display = (filter === "all" || card.getAttribute("data-category") === filter) ? "block" : "none";
            });
        });
    });

    document.getElementById("sol-anexos")?.addEventListener("change", function () {
        document.getElementById("file-list").innerText = this.files.length > 0 ? `${this.files.length} arquivo(s)` : "";
    });

});