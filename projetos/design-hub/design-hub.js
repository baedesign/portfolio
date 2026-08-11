(() => {
  /* ========================================================
     Dashboard real — alternância entre screenshots reais
     ======================================================== */
  const adminImage = document.getElementById('dhAdminInterfaceImage');
  const adminCaption = document.getElementById('dhAdminInterfaceCaption');
  const adminFigure = document.querySelector('.dh-admin-interface');
  const themeButtons = [...document.querySelectorAll('[data-admin-theme]')];
  const themes = {
    dark: {
      src: 'assets/design-hub-dashboard-admin-dark-real.png',
      alt: 'Dashboard real do Design HUB na visão do Administrador, em modo escuro',
      caption: 'Modo escuro — tela real do Design HUB, preservando sidebar, métricas, equipe, prioridades e controle de produção.'
    },
    light: {
      src: 'assets/design-hub-dashboard-admin-light-real.png',
      alt: 'Dashboard real do Design HUB na visão do Administrador, em modo claro',
      caption: 'Modo claro — tela real do mesmo dashboard administrativo com a preferência de aparência aplicada no produto.'
    }
  };
  const setTheme = (theme) => {
    const data = themes[theme];
    if (!data || !adminImage) return;
    adminFigure?.classList.add('is-switching');
    const nextImage = new Image();
    nextImage.onload = () => {
      adminImage.src = data.src;
      adminImage.alt = data.alt;
      if (adminCaption) adminCaption.textContent = data.caption;
      adminFigure?.classList.remove('is-switching');
    };
    nextImage.onerror = () => adminFigure?.classList.remove('is-switching');
    nextImage.src = data.src;
    themeButtons.forEach((button) => {
      const active = button.dataset.adminTheme === theme;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
  };
  themeButtons.forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.adminTheme)));

  /* ========================================================
     Controle de produção — baseado em app.demandas.tsx
     ======================================================== */
  const production = document.querySelector('[data-production-demo]');
  const prodRows = production ? [...production.querySelectorAll('[data-demand-id]')] : [];
  const prodCount = production?.querySelector('[data-prod-count]');
  const prodSearch = production?.querySelector('[data-prod-search]');
  const prodStage = production?.querySelector('[data-prod-stage]');
  const prodOwner = production?.querySelector('[data-prod-owner]');
  const prodFilterButtons = production ? [...production.querySelectorAll('[data-prod-filter]')] : [];
  let prodFilter = 'active';

  const filterRows = () => {
    const term = (prodSearch?.value || '').trim().toLowerCase();
    const stage = prodStage?.value || 'all';
    const owner = prodOwner?.value || 'all';
    let visible = 0;
    prodRows.forEach((row) => {
      const status = row.dataset.status;
      const rowOwner = row.dataset.owner;
      const rowStage = row.dataset.stage;
      const search = row.dataset.search || '';
      const byFilter =
        prodFilter === 'all' ||
        (prodFilter === 'active' && status !== 'closed') ||
        (prodFilter === 'mine' && rowOwner === 'bernardo' && status !== 'closed') ||
        (prodFilter === 'blocked' && status === 'blocked') ||
        (prodFilter === 'approval' && status === 'approval');
      const show = byFilter && (!term || search.includes(term)) && (stage === 'all' || rowStage === stage) && (owner === 'all' || rowOwner === owner);
      row.hidden = !show;
      if (show) visible += 1;
    });
    if (prodCount) prodCount.textContent = String(visible);
  };
  prodFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      prodFilter = button.dataset.prodFilter || 'active';
      prodFilterButtons.forEach((item) => item.classList.toggle('active', item === button));
      filterRows();
    });
  });
  prodSearch?.addEventListener('input', filterRows);
  prodStage?.addEventListener('change', filterRows);
  prodOwner?.addEventListener('change', filterRows);
  filterRows();

  const demandData = {
    21: {
      protocol:'#BAE-0021', name:'Campanha Dia dos Pais', company:'Empresa Demo · Post para redes sociais', priority:'Alta', deadline:'15/08/2026', urgency:'5 dias restantes', stage:'Criação', owner:'Bruno', initials:'BR', next:'Preparar primeira versão para revisão interna.', clientStatus:'Em produção'
    },
    22: {
      protocol:'#BAE-0022', name:'Apresentação Comercial', company:'Empresa Demo · Apresentação', priority:'Normal', deadline:'20/08/2026', urgency:'10 dias restantes', stage:'Planejamento', owner:'Cliente', initials:'CL', next:'Aguardar retorno do cliente sobre a versão enviada.', clientStatus:'Aguardando aprovação'
    },
    23: {
      protocol:'#BAE-0023', name:'Banner Institucional', company:'Empresa Demo · Banner', priority:'Normal', deadline:'30/07/2026', urgency:'Finalizada', stage:'Finalização', owner:'Bernardo', initials:'BR', next:'Fluxo encerrado. Sem etapas pendentes.', clientStatus:'Finalizada'
    }
  };
  const modal = document.querySelector('[data-workflow-modal]');
  const workflowDialog = modal?.querySelector('.dh-workflow-dialog');
  const modalFields = {
    protocol: modal?.querySelector('[data-modal-protocol]'), name: modal?.querySelector('[data-modal-name]'), company: modal?.querySelector('[data-modal-company]'), priority: modal?.querySelector('[data-modal-priority]'), deadline: modal?.querySelector('[data-modal-deadline]'), urgency: modal?.querySelector('[data-modal-urgency]'), stage: modal?.querySelector('[data-modal-stage]'), owner: modal?.querySelector('[data-modal-owner]'), initials: modal?.querySelector('[data-modal-initials]'), team: modal?.querySelector('[data-modal-team]'), next: modal?.querySelector('[data-modal-next]'), clientStatus: modal?.querySelector('[data-modal-client-status]')
  };
  let currentDemand = 21;
  const openWorkflow = (id) => {
    const data = demandData[id];
    if (!data || !modal) return;
    currentDemand = Number(id);
    Object.entries(modalFields).forEach(([key, node]) => { if (node && key in data) node.textContent = data[key]; });
    const adminPriority = modal.querySelector('[data-admin-priority]');
    if (adminPriority) adminPriority.value = data.priority;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  };
  const closeWorkflow = () => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  };
  prodRows.forEach((row) => row.addEventListener('click', () => openWorkflow(row.dataset.demandId)));
  modal?.querySelectorAll('[data-close-workflow]').forEach((button) => button.addEventListener('click', closeWorkflow));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal?.classList.contains('open')) closeWorkflow(); });
  modal?.querySelector('[data-demo-handoff]')?.addEventListener('click', () => {
    const nextStage = modal.querySelector('[data-handoff-stage]')?.value || 'Revisão interna';
    const nextOwner = modal.querySelector('[data-handoff-owner]')?.value || 'Bernardo';
    const nextAction = modal.querySelector('[data-handoff-action]')?.value || 'Revisar versão.';
    const data = demandData[currentDemand];
    if (data) {
      data.stage = nextStage;
      data.owner = nextOwner;
      data.next = nextAction;
      if (modalFields.stage) modalFields.stage.textContent = nextStage;
      if (modalFields.owner) modalFields.owner.textContent = nextOwner;
      if (modalFields.team) modalFields.team.textContent = nextOwner;
      if (modalFields.initials) modalFields.initials.textContent = nextOwner.split(' ').map((p) => p[0]).join('').slice(0,2).toUpperCase();
      if (modalFields.next) modalFields.next.textContent = nextAction;
      workflowDialog?.classList.remove('demo-success');
      requestAnimationFrame(() => workflowDialog?.classList.add('demo-success'));
    }
  });

  /* ========================================================
     Briefing — baseado em app.nova-solicitacao.tsx
     ======================================================== */
  const brief = document.querySelector('[data-briefing-live]');
  if (!brief) return;
  const briefBody = brief.querySelector('[data-briefing-body]');
  const briefTitle = brief.querySelector('[data-briefing-step-title]');
  const briefCounter = brief.querySelector('[data-briefing-counter]');
  const briefProgress = brief.querySelector('[data-briefing-progress]');
  const briefTopDesc = brief.querySelector('[data-briefing-topdesc]');
  const briefBack = brief.querySelector('[data-briefing-back]');
  const briefNext = brief.querySelector('[data-briefing-next]');
  let step = 0;
  const form = {
    serviceType:'Post para redes sociais',
    name:'Campanha Dia dos Pais', description:'Peça de post para a campanha de Dia dos Pais.', objective:'Divulgar',
    audience:'Clientes e seguidores da marca entre 25 e 45 anos.', content:'Título, subtítulo, imagem principal e assinatura da marca.', mandatoryText:'', cta:'Saiba mais',
    channels:['Instagram Feed','LinkedIn'], dimensions:'1080x1350px', referenceLinks:'', referenceNotes:'', avoid:'', hasBrand:'sim', brandNotes:'Seguir manual de marca vigente.', deadline:'2026-08-15', eventDate:'', notes:''
  };
  const titles = ['Tipo de demanda','Informações gerais','Público','Conteúdo','Formatos','Referências','Identidade visual','Prazo','Observações','Revisão'];
  const serviceTypes = ['Post para redes sociais','Carrossel','Stories','Identidade visual','Apresentação','Landing page'];
  const objectives = ['Informar','Divulgar','Engajar','Vender','Outro'];
  const channels = ['Instagram Feed','Instagram Stories','LinkedIn','E-mail','Impresso'];

  const field = (label, value, type='text', hint='') => `<div class="dh-form-field"><label>${label}</label>${hint?`<small>${hint}</small>`:''}${type==='textarea'?`<textarea rows="4" data-form-key="${value.key}">${value.value||''}</textarea>`:`<input type="${type}" data-form-key="${value.key}" value="${value.value||''}">`}</div>`;
  const summary = (label, value) => `<div class="dh-summary-row"><span>${label}</span><span>${value || '—'}</span></div>`;

  const renderBrief = () => {
    briefTitle.textContent = titles[step];
    briefCounter.textContent = `${step+1} / 10`;
    briefTopDesc.textContent = `Etapa ${step+1} de 10 — ${titles[step]}`;
    briefProgress.style.width = `${(step+1)*10}%`;
    briefBack.disabled = step === 0;
    briefNext.textContent = step === 9 ? 'Enviar solicitação' : 'Continuar →';
    let html = '';
    if (step === 0) {
      html = `<h3>O que você precisa?</h3><div class="dh-service-grid">${serviceTypes.map((item)=>`<button type="button" data-service="${item}" class="${form.serviceType===item?'selected':''}">${item}${form.serviceType===item?'<b>✓</b>':''}</button>`).join('')}</div>`;
    } else if (step === 1) {
      html = `<div class="dh-form-stack">${field('Nome da demanda',{key:'name',value:form.name})}${field('Descrição',{key:'description',value:form.description},'textarea','Conte brevemente o que precisa ser criado.')}<div class="dh-form-field"><label>Objetivo</label><small>O que essa peça precisa alcançar?</small><div class="dh-pill-options">${objectives.map(o=>`<button type="button" data-objective="${o}" class="${form.objective===o?'selected':''}">${o}</button>`).join('')}</div></div><div class="dh-form-field"><label>Solicitantes</label><small>Você será o solicitante principal. Se quiser, inclua mais uma pessoa da sua empresa.</small><div class="dh-summary-row" style="margin-top:8px"><span>Principal</span><span>Cliente Demo · Empresa Demo</span></div></div></div>`;
    } else if (step === 2) {
      html = `<div class="dh-form-stack">${field('Para quem estamos criando?',{key:'audience',value:form.audience},'textarea','Ex.: Funcionários da empresa entre 25 e 45 anos.')}</div>`;
    } else if (step === 3) {
      html = `<div class="dh-form-stack">${field('Conteúdo principal',{key:'content',value:form.content},'textarea')}${field('Texto obrigatório',{key:'mandatoryText',value:form.mandatoryText},'textarea')}${field('CTA / chamada para ação',{key:'cta',value:form.cta})}</div>`;
    } else if (step === 4) {
      html = `<div class="dh-form-stack"><div class="dh-form-field"><label>Onde a peça será utilizada?</label><div class="dh-pill-options">${channels.map(c=>`<button type="button" data-channel="${c}" class="${form.channels.includes(c)?'selected':''}">${c}</button>`).join('')}</div></div>${field('Dimensões específicas (opcional)',{key:'dimensions',value:form.dimensions})}</div>`;
    } else if (step === 5) {
      html = `<div class="dh-form-stack"><div class="dh-form-field"><label>Possui alguma referência visual?</label><small>Arquivos de referência podem ser anexados no produto real.</small><div class="dh-file-drop">＋ Anexar arquivos de referência</div></div>${field('Links de referência',{key:'referenceLinks',value:form.referenceLinks},'textarea')}${field('Observações sobre as referências',{key:'referenceNotes',value:form.referenceNotes},'textarea')}${field('Existe algo que você NÃO gostaria que fosse utilizado?',{key:'avoid',value:form.avoid},'textarea')}</div>`;
    } else if (step === 6) {
      html = `<div class="dh-form-stack"><div class="dh-form-field"><label>Existe uma identidade visual que deve ser seguida?</label><div class="dh-pill-options"><button type="button" data-brand="sim" class="${form.hasBrand==='sim'?'selected':''}">Sim</button><button type="button" data-brand="nao" class="${form.hasBrand==='nao'?'selected':''}">Não</button></div></div>${form.hasBrand==='sim'?`<div class="dh-form-field"><label>Materiais da marca</label><small>Logo, brandbook, fontes e outros materiais.</small><div class="dh-file-drop">＋ Anexar materiais de identidade visual</div></div>${field('Observações sobre a identidade visual',{key:'brandNotes',value:form.brandNotes},'textarea')}`:''}</div>`;
    } else if (step === 7) {
      html = `<div class="dh-form-stack">${field('Quando você precisa receber esse material?',{key:'deadline',value:form.deadline},'date')}${field('Existe alguma data de publicação ou evento relacionada? (opcional)',{key:'eventDate',value:form.eventDate},'date')}</div>`;
    } else if (step === 8) {
      html = `<div class="dh-form-stack">${field('Existe mais alguma informação que o designer precisa saber?',{key:'notes',value:form.notes},'textarea')}</div>`;
    } else {
      html = `<div class="dh-summary-block"><div class="dh-success-review"><span>✦</span><h3>Revisão do briefing</h3></div><h4>Demanda</h4>${summary('Tipo de demanda',form.serviceType)}${summary('Nome',form.name)}${summary('Descrição',form.description)}${summary('Objetivo',form.objective)}<h4>Público e conteúdo</h4>${summary('Público-alvo',form.audience)}${summary('Conteúdo',form.content)}${summary('CTA',form.cta)}<h4>Formatos</h4>${summary('Canais',form.channels.join(', '))}${summary('Dimensões',form.dimensions)}<h4>Identidade visual</h4>${summary('Possui identidade',form.hasBrand==='sim'?'Sim':'Não')}${summary('Observações',form.brandNotes)}<h4>Prazo e observações</h4>${summary('Prazo desejado','15/08/2026')}${summary('Observações',form.notes)}</div>`;
    }
    briefBody.innerHTML = html;
    bindBriefFields();
  };

  const bindBriefFields = () => {
    briefBody.querySelectorAll('[data-service]').forEach((button) => button.addEventListener('click', () => { form.serviceType = button.dataset.service; renderBrief(); }));
    briefBody.querySelectorAll('[data-objective]').forEach((button) => button.addEventListener('click', () => { form.objective = button.dataset.objective; renderBrief(); }));
    briefBody.querySelectorAll('[data-channel]').forEach((button) => button.addEventListener('click', () => { const c=button.dataset.channel; form.channels = form.channels.includes(c) ? form.channels.filter(x=>x!==c) : [...form.channels,c]; renderBrief(); }));
    briefBody.querySelectorAll('[data-brand]').forEach((button) => button.addEventListener('click', () => { form.hasBrand = button.dataset.brand; renderBrief(); }));
    briefBody.querySelectorAll('[data-form-key]').forEach((input) => input.addEventListener('input', () => { form[input.dataset.formKey] = input.value; }));
  };
  briefBack.addEventListener('click', () => { if (step > 0) { step -= 1; renderBrief(); } });
  briefNext.addEventListener('click', () => {
    if (step < 9) { step += 1; renderBrief(); return; }
    briefBody.innerHTML = `<div class="dh-success-card"><span>✓</span><h3>Solicitação enviada com sucesso!</h3><p>O designer receberá seu briefing e iniciará a análise.</p><small>NÚMERO DE PROTOCOLO</small><strong>#BAE-0024</strong></div>`;
    briefNext.textContent = 'Recomeçar demonstração';
    briefBack.disabled = true;
    briefProgress.style.width = '100%';
    briefNext.onclick = () => { step = 0; briefNext.onclick = null; renderBrief(); };
  });
  renderBrief();
})();
